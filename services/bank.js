exports.resolveRatePeriod = type => {
  switch (type) {
    case "1w":
      return "oneW";
    case "2w":
      return "twoW";
    case "3w":
      return "threeW";
    case "1m":
      return "oneM";
    case "3m":
      return "threeM";
    case "6m":
      return "sixM";
    case "9m":
      return "nineM";
    case "12m":
      return "twelveM";
    case "18m":
      return "eighteenM";
    case "24m":
      return "twentyFourM";
    case "36m":
      return "thirtySixM";
  }
};

exports.getLastestRates = (bank, callback) => {
  if (!bank || !bank.interestRates) {
    callback("not found");
    return;
  } else {
    let oneM = bank.interestRates.oneM;
    oneM = oneM.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.oneM = oneM[0];
    let twoM = bank.interestRates.twoM;
    twoM = twoM.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.twoM = twoM[0];
    let threeM = bank.interestRates.threeM;
    threeM = threeM.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.threeM = threeM[0];
    let sixM = bank.interestRates.sixM;
    sixM = sixM.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.sixM = sixM[0];
    let nineM = bank.interestRates.nineM;
    nineM = nineM.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.nineM = nineM[0];
    let twelveM = bank.interestRates.twelveM;
    twelveM = twelveM.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.twelveM = twelveM[0];
    let thirteenM = bank.interestRates.thirteenM;
    thirteenM = thirteenM.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.thirteenM = thirteenM[0];
    let eighteenM = bank.interestRates.eighteenM;
    eighteenM = eighteenM.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.eighteenM = eighteenM[0];
    let twentyFourM = bank.interestRates.twentyFourM;
    twentyFourM = twentyFourM.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.twentyFourM = twentyFourM[0];
    let thirtySixM = bank.interestRates.thirtySixM;
    thirtySixM = thirtySixM.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.thirtySixM = thirtySixM[0];
    let oneW = bank.interestRates.oneW;
    oneW = oneW.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.oneW = oneW[0];
    let twoW = bank.interestRates.twoW;
    twoW = twoW.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.twoW = twoW[0];
    let threeW = bank.interestRates.threeW;
    threeW = threeW.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.threeW = threeW[0];
    let unlimit = bank.interestRates.unlimit;
    unlimit = unlimit.sort((a, b) => {
      b.lastUpdate - a.lastUpdate;
    });
    bank.interestRates.unlimit = unlimit[0];
    callback(null, bank.interestRates);
  }
};
