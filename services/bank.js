var { banks } = require("../models/bank");
exports.search = async (keywords, banks) => {
  try {
    let results = [];
    keywords = keywords.toLowerCase();
    for (let i = 0; i < banks.length; i++) {
      const bank = banks[i];
      if (bank.normalized.indexOf(keywords) > -1) {
        results.push(bank);
      }
    }
    return results;
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.propagate = (banks) => {
  for (let i = 0; i < banks.length; i++) {
    const bank = banks[i];
    bank.interests = rateTransformWrapper(bank);
  }
  return banks;
};

function rateTransformWrapper(bank) {
  let unlimit = getLatestRate(bank.interests, 0);
  let one = getLatestRate(bank.interests, 1);
  let two = getLatestRate(bank.interests, 2);
  let thr = getLatestRate(bank.interests, 3);
  let six = getLatestRate(bank.interests, 6);
  let nine = getLatestRate(bank.interests, 9);
  let tw = getLatestRate(bank.interests, 12);
  let tht = getLatestRate(bank.interests, 13);
  let et = getLatestRate(bank.interests, 18);
  let tf = getLatestRate(bank.interests, 24);
  let ts = getLatestRate(bank.interests, 36);
  let results = [unlimit, thr, six, nine, tw, tht, et, tf, ts];
  return results;
}

function getLatestRate(rates, period) {
  let results = [];
  for (let i = 0; i < rates.length; i++) {
    const rate = rates[i];
    if (rate.period === period) {
      if (rate.value < 0) {
        rate.value = 0;
      }
      results.push(rate);
    }
  }
  results.sort((a, b) => {
    let x = new Date(b.lastUpdate).getTime();
    let y = new Date(a.lastUpdate).getTime();
    return x - y;
  });
  return results[0];
}

exports.list = async (ascent = true) => {
  try {
    let result = await banks.find({}).exec();
    result = result.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    if (!ascent) {
      result = result.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        } else if (a.name > b.name) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.getByCode = async (code) => {
  try {
    let result = await banks.findOne({ normalized: code.toLowerCase() }).exec();
    return result;
  } catch (error) {}
};

exports.create = async (bank) => {
  try {
    let exist = await banks.findOne({ normalized: bank.normalized });
    if (!exist) {
      let result = await banks.create(bank);
      return result;
    } else {
      throw new Error("Bank has already existed");
    }
  } catch (error) {
    console.error(error);
  }
};

exports.removeOne = async (id) => {
  try {
    let bank = await banks.findOne({ _id: id });
    if (bank && !bank.approved) {
      let result = await banks.findOneAndDelete({ _id: id });
      return result;
    } else {
      console.log("violate permission");
      return null;
    }
  } catch (error) {
    return null;
  }
};

exports.parseFromBody = (body) => {
  try {
    return {
      name: body.name,
      normalized: body.normalized,
      code: body.code,
      link: body.link,
    };
  } catch (error) {}
};
