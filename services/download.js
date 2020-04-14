const ratesWrapper = [0, 1, 2, 3, 4, 6, 9, 12, 13, 18, 24, 36];

getRates = (period, rates) => {
  rates = rates.filter(rate => rate.period === period)
  if (rates) {
    rates.sort((a, b) => {
      let x = new Date(a.lastUpdate);
      let y = new Date(b.lastUpdate);
      return y.getTime() - x.getTime();
    });
    return rates[0];
  } else {
    return { value: -10, period: period, threshold: "" };
  }
};

exports.getLatestRates = (rates, online = false) => {
  if (online) {
    rates = rates.filter((rate) => rate.online);
  }
  let result = [];
  for (let i = 0; i < ratesWrapper.length; i++) {
    const period = ratesWrapper[i];
    result.push(getRates(period, rates));
  }
  return result;
};