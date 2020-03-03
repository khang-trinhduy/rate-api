gifts = [
  "Đồng hồ thông minh Apple trị giá 10.000.000 VNĐ",
  "Rô bốt hút bụi trị giá 4.700.000 VNĐ",
  "Máy lọc không khí trị giá 3.000.000 VNĐ",
  "Bình lọc nước trị giá 1.000.000 VNĐ",
  "Bộ 3 nồi Inox trị giá 500.000 VNĐ",
  "Hộp cơm 3 tầng Lock&Lock trị giá 300.000 VNĐ"
];
module.exports.banks_seed = [
  {
    name: "Agribank",
    code: "Agribank",
    normalized: "agribank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.20", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.30", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "4.30", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "4.80", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "5.30", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "5.40", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "6.80", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "6.80", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "6.80", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "6.80", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "0.00", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "CB",
    code: "CB",
    normalized: "cb",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.50", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.85", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.85", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.90", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "7.95", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "8.00", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "8.00", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "8.00", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "GPBank",
    code: "GPBank",
    normalized: "gpbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.80", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.70", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 3 tỉ" }],
      nineM: [{ value: "7.80", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 3 tỉ" }],
      twelveM: [
        { value: "7.90", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 3 tỉ" }
      ],
      thirteenM: [
        { value: "8.00", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 3 tỉ" }
      ],
      eighteenM: [{ value: "7.65", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "7.65", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.65", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "Oceanbank",
    code: "Oceanbank",
    normalized: "oceanbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.50", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "6.90", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "6.50", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.90", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "7.60", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.30", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "7.40", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.50", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "ACB",
    code: "ACB",  
    normalized: "acb",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }],
      sixM: [{ value: "6.80", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }],
      nineM: [{ value: "6.90", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }],
      twelveM: [
        { value: "7.30", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }
      ],
      thirteenM: [
        { value: "7.10", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }
      ],
      eighteenM: [
        { value: "7.80", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }
      ],
      twentyFourM: [
        { value: "7.80", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }
      ],
      thirtySixM: [
        { value: "7.80", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }
      ]
    }
  },
  {
    name: "ABBANK",
    code: "ABBANK",
    normalized: "abbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.40", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.00", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "6.80", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.80", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "8.30", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.90", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "7.90", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.90", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "BacABank",
    code: "BacABank",
    normalized: "bacabank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.80", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.70", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.80", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "8.00", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "8.00", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "8.00", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "8.00", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "8.00", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "BaoVietBank",
    code: "BaoVietBank",
    normalized: "baovietbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.80", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.80", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "4.80", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "4.80", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "6.85", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "6.90", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.60", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "7.99", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.60", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "7.60", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.60", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "BIDV",
    code: "BIDV",
    normalized: "bidv",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.10", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.30", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "4.30", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "4.80", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "5.30", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "5.30", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "6.80", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "6.80", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "6.80", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "6.80", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "6.80", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "DongABank",
    code: "DongABank",
    normalized: "dongabank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.00", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.20", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.40", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "7.60", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.60", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "7.60", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.60", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "Eximbank",
    code: "Eximbank",
    normalized: "eximbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.30", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.60", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "4.80", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "5.60", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "5.80", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.60", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "8.40", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "8.00", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "8.40", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "8.40", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "HDBank",
    code: "HDBank",
    normalized: "hdbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "6.80", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "6.80", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.30", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "7.40", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.40", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "7.00", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.00", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "KienLongBank",
    code: "KienLongBank",
    normalized: "kienlongbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.80", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "4.90", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.00", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.00", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.60", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "7.80", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "8.00", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "8.00", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.80", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "LienVietPostBank",
    code: "LienVietPostBank",
    normalized: "lienvietpostbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.90", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "4.90", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "6.10", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "6.20", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "6.90", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "7.00", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.20", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "7.30", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.40", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "MBB",
    code: "MBB",
    normalized: "mbb",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.80", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "6.40", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "6.40", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [
        { value: "7.40", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 200 tỉ" }
      ],
      thirteenM: [{ value: "6.70", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.30", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [
        { value: "7.60", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 200 tỉ" }
      ],
      thirtySixM: [{ value: "7.40", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "MSB",
    code: "MSB",
    normalized: "msb",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ  1 tỉ" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ  1 tỉ" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ  1 tỉ" }],
      sixM: [{ value: "6.90", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ  1 tỉ" }],
      nineM: [{ value: "7.00", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ  1 tỉ" }],
      twelveM: [
        { value: "7.10", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ  1 tỉ" }
      ],
      thirteenM: [
        { value: "7.20", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ  1 tỉ" }
      ],
      eighteenM: [
        { value: "7.50", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ  1 tỉ" }
      ],
      twentyFourM: [
        { value: "7.60", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ  1 tỉ" }
      ],
      thirtySixM: [
        { value: "7.60", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ  1 tỉ" }
      ]
    }
  },
  {
    name: "Nam A Bank",
    code: "Nam A Bank",
    normalized: "nam a bank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.50", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.90", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "4.95", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "6.80", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.00", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.99", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "8.45", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.70", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "8.60", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.90", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "NCB",
    code: "NCB",
    normalized: "ncb",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.50", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.90", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.90", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.96", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "7.98", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "8.10", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "8.20", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "8.30", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "OCB",
    code: "OCB",
    normalized: "ocb",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.10", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.90", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.30", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.40", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.50", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "0.00", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.60", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "7.80", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.80", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "PGBank",
    code: "PGBank",
    normalized: "pgbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.30", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.30", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.80", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "8.00", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "8.00", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "8.00", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "8.00", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "Sacombank",
    code: "Sacombank",
    normalized: "sacombank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.90", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "4.95", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [
        { value: "6.30", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 200 triệu" }
      ],
      nineM: [{ value: "6.40", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [
        { value: "6.90", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 200 triệu" }
      ],
      thirteenM: [{ value: "7.90", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [
        { value: "7.50", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 200 triệu" }
      ],
      twentyFourM: [
        { value: "7.70", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 200 triệu" }
      ],
      thirtySixM: [
        { value: "7.80", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 200 triệu" }
      ]
    }
  },
  {
    name: "Saigonbank",
    code: "Saigonbank",
    normalized: "saigonbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.30", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.80", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "4.90", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "6.80", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "6.80", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.40", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "7.70", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.70", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "7.70", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.70", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "SCB",
    code: "SCB",
    normalized: "scb",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.10", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.10", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.50", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "7.70", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.70", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "7.55", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.55", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "SHB",
    code: "SHB",
    normalized: "shb",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.20", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 2 tỉ" }],
      oneM: [{ value: "4.60", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 2 tỉ" }],
      twoM: [{ value: "4.70", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 2 tỉ" }],
      threeM: [{ value: "4.80", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 2 tỉ" }],
      sixM: [{ value: "6.90", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 2 tỉ" }],
      nineM: [{ value: "7.00", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 2 tỉ" }],
      twelveM: [
        { value: "7.10", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 2 tỉ" }
      ],
      thirteenM: [
        { value: "7.20", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 2 tỉ" }
      ],
      eighteenM: [
        { value: "7.40", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 2 tỉ" }
      ],
      twentyFourM: [
        { value: "7.40", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 2 tỉ" }
      ],
      thirtySixM: [
        { value: "7.50", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 2 tỉ" }
      ]
    }
  },
  {
    name: "Techcombank",
    code: "Techcombank",
    normalized: "techcombank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [
        {
          value: "4.80",
          period: 1,
          loc: "HCM", lastUpdate: "2020/02/02",
          threshold: "Từ 3 tỉ và KH trên 50 tuổi"
        }
      ],
      twoM: [
        {
          value: "4.80",
          period: 2,
          loc: "HCM", lastUpdate: "2020/02/02",
          threshold: "Từ 3 tỉ và KH trên 50 tuổi"
        }
      ],
      threeM: [
        {
          value: "4.80",
          period: 3,
          loc: "HCM", lastUpdate: "2020/02/02",
          threshold: "Từ 3 tỉ và KH trên 50 tuổi"
        }
      ],
      sixM: [
        {
          value: "6.90",
          period: 6,
          loc: "HCM", lastUpdate: "2020/02/02",
          threshold: "Từ 3 tỉ và KH trên 50 tuổi"
        }
      ],
      nineM: [
        {
          value: "6.20",
          period: 9,
          loc: "HCM", lastUpdate: "2020/02/02",
          threshold: "Từ 3 tỉ và KH trên 50 tuổi"
        }
      ],
      twelveM: [
        {
          value: "7.00",
          period: 12,
          loc: "HCM", lastUpdate: "2020/02/02",
          threshold: "Từ 3 tỉ và KH trên 50 tuổi"
        }
      ],
      thirteenM: [
        {
          value: "6.50",
          period: 13,
          loc: "HCM", lastUpdate: "2020/02/02",
          threshold: "Từ 3 tỉ và KH trên 50 tuổi"
        }
      ],
      eighteenM: [
        {
          value: "7.20",
          period: 18,
          loc: "HCM", lastUpdate: "2020/02/02",
          threshold: "Từ 3 tỉ và KH trên 50 tuổi"
        }
      ],
      twentyFourM: [
        {
          value: "6.60",
          period: 24,
          loc: "HCM", lastUpdate: "2020/02/02",
          threshold: "Từ 3 tỉ và KH trên 50 tuổi"
        }
      ],
      thirtySixM: [
        {
          value: "6.60",
          period: 36,
          loc: "HCM", lastUpdate: "2020/02/02",
          threshold: "Từ 3 tỉ và KH trên 50 tuổi"
        }
      ]
    }
  },
  {
    name: "TPBank",
    code: "TPBank",
    normalized: "tpbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.60", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.85", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "4.95", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "6.80", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.05", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.40", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "7.55", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.60", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "7.60", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.30", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "VIB",
    code: "VIB",
    normalized: "vib",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 5 tỉ" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.20", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.30", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.59", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "7.59", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.60", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "7.60", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [
        {
          value: "7.60",
          period: 36,
          loc: "HCM", lastUpdate: "2020/02/02",
          threshold: ""
        }
      ]
    }
  },
  {
    name: "VietABank",
    code: "VietABank",
    normalized: "vietabank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.90", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.00", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.10", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.60", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "7.70", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "7.70", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "7.90", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "7.70", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "VietBank",
    code: "VietBank",
    normalized: "vietbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "5.00", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "5.00", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "5.00", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.50", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.80", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.90", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "8.00", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "8.10", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "8.20", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "8.20", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "VietCapitalBank",
    code: "VietCapitalBank",
    normalized: "vietcapitalbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.85", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "4.85", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "4.90", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "7.30", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "7.50", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "7.90", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "8.20", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "8.00", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "8.10", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "8.10", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "Vietcombank",
    code: "Vietcombank",
    normalized: "vietcombank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.10", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.30", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "4.30", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "4.80", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "5.30", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "5.30", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "6.80", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "0.00", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "0.00", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "6.80", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "6.80", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "VietinBank",
    code: "VietinBank",
    normalized: "vietinbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.10", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.30", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "4.30", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "4.80", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "5.30", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "5.30", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "6.80", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "6.60", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "6.70", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "6.80", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "6.80", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "VPBank",
    code: "VPBank",
    normalized: "vpbank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "4.80", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }],
      twoM: [{ value: "4.80", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }],
      threeM: [{ value: "4.90", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }],
      sixM: [{ value: "7.40", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }],
      nineM: [{ value: "7.10", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }],
      twelveM: [
        { value: "7.15", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }
      ],
      thirteenM: [
        { value: "7.15", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }
      ],
      eighteenM: [
        { value: "7.60", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }
      ],
      twentyFourM: [
        { value: "7.60", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }
      ],
      thirtySixM: [
        { value: "7.60", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "Từ 10 tỉ" }
      ]
    }
  },
  {
    name: "ANZ Bank",
    code: "ANZ Bank",
    normalized: "anz bank",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "1.50", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "1.50", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "1.50", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "1.50", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "-100.00", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "-100.00", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "-100.00", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "-100.00", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [
        { value: "-100.00", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }
      ],
      thirtySixM: [{ value: "-100.00", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "HSBC",
    code: "HSBC",
    normalized: "hsbc",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "0.50", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "0.50", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "1.25", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "1.75", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "1.75", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "2.75", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "0.00", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      eighteenM: [{ value: "2.75", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "2.75", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "2.75", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  },
  {
    name: "Standard Chartered",
    code: "Standard Chartered",
    normalized: "standard chartered",
    type: 1,
    interestRates: {
      unlimit: [{ value: "0.00", period: 0, loc: "HCM", lastUpdate: "2020/02/02", threshold: "-" }],
      oneM: [{ value: "1.73", period: 1, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twoM: [{ value: "2.10", period: 2, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      threeM: [{ value: "2.33", period: 3, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      sixM: [{ value: "2.33", period: 6, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      nineM: [{ value: "2.33", period: 9, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twelveM: [{ value: "2.33", period: 12, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirteenM: [{ value: "2.33", period: 13, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      eighteenM: [{ value: "2.33", period: 18, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      twentyFourM: [{ value: "2.33", period: 24, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }],
      thirtySixM: [{ value: "2.33", period: 36, loc: "HCM", lastUpdate: "2020/02/02", threshold: "" }]
    }
  }
];
