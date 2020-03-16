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

exports.list = async () => {
  try {
    let result = await banks.find({}).exec();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
