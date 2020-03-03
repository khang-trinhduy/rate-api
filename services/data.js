var { banks } = require("../models/bank");
exports.handler = (bank, rate, type) => {
  switch (type) {
    case "1m":
      if (!rate.interestRates.oneM) {
        return;
      } else {
        if (!bank.interestRates.oneM) {
          bank.interestRates.oneM = [];
        }
        bank.interestRates.oneM.push(rate.interestRates.oneM[0]);
      }
      break;
    case "2m":
      if (!rate.interestRates.twoM) {
        return;
      } else {
        if (!bank.interestRates.twoM) {
          bank.interestRates.twoM = [];
        }
        bank.interestRates.twoM.push(rate.interestRates.twoM[0]);
      }
      break;
    case "3m":
      if (!rate.interestRates.threeM) {
        return;
      } else {
        if (!bank.interestRates.threeM) {
          bank.interestRates.threeM = [];
        }
        bank.interestRates.threeM.push(rate.interestRates.threeM[0]);
      }
      break;
    case "6m":
      if (!rate.interestRates.sixM) {
        return;
      } else {
        if (!bank.interestRates.sixM) {
          bank.interestRates.sixM = [];
        }
        bank.interestRates.sixM.push(rate.interestRates.sixM[0]);
      }
      break;
    case "9m":
      if (!rate.interestRates.nineM) {
        return;
      } else {
        if (!bank.interestRates.nineM) {
          bank.interestRates.nineM = [];
        }
        bank.interestRates.nineM.push(rate.interestRates.nineM[0]);
      }
      break;
    case "12m":
      if (!rate.interestRates.twelveM) {
        return;
      } else {
        if (!bank.interestRates.twelveM) {
          bank.interestRates.twelveM = [];
        }
        bank.interestRates.twelveM.push(rate.interestRates.twelveM[0]);
      }
      break;
    case "13m":
      if (!rate.interestRates.thirteenM) {
        return;
      } else {
        if (!bank.interestRates.thirteenM) {
          bank.interestRates.thirteenM = [];
        }
        bank.interestRates.thirteenM.push(rate.interestRates.thirteenM[0]);
      }
      break;
    case "18m":
      if (!rate.interestRates.eighteenM) {
        return;
      } else {
        if (!bank.interestRates.eighteenM) {
          bank.interestRates.eighteenM = [];
        }
        bank.interestRates.eighteenM.push(rate.interestRates.eighteenM[0]);
      }
      break;
    case "24m":
      if (!rate.interestRates.twentyFourM) {
        return;
      } else {
        if (!bank.interestRates.twentyFourM) {
          bank.interestRates.twentyFourM = [];
        }
        bank.interestRates.twentyFourM.push(rate.interestRates.twentyFourM[0]);
      }
      break;
    case "36m":
      if (!rate.interestRates.thirtySixM) {
        return;
      } else {
        if (!bank.interestRates.thirtySixM) {
          bank.interestRates.thirtySixM = [];
        }
        bank.interestRates.thirtySixM.push(rate.interestRates.thirtySixM[0]);
      }
      break;
    case "1w":
      if (!rate.interestRates.oneW) {
        return;
      } else {
        if (!bank.interestRates.oneW) {
          bank.interestRates.oneW = [];
        }
        bank.interestRates.oneW.push(rate.interestRates.oneW[0]);
      }
      break;
    case "2w":
      if (!rate.interestRates.twoW) {
        return;
      } else {
        if (!bank.interestRates.twoW) {
          bank.interestRates.twoW = [];
        }
        bank.interestRates.twoW.push(rate.interestRates.twoW[0]);
      }
      break;
    case "3w":
      if (!rate.interestRates.threeW) {
        return;
      } else {
        if (!bank.interestRates.threeW) {
          bank.interestRates.threeW = [];
        }
        bank.interestRates.threeW.push(rate.interestRates.threeW[0]);
      }
      break;
    default:
      if (!rate.interestRates.unlimit) {
        return;
      } else {
        if (!bank.interestRates.unlimit) {
          bank.interestRates.unlimit = [];
        }
        bank.interestRates.unlimit.push(rate.interestRates.unlimit[0]);
      }
      break;
  }
};
