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
