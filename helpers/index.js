const bankService = require("../services/bank");

exports.bankQueryHandler = async (req) => {
  let result = [];
  if (req.query.sort && req.query.order && req.query.page) {
    let order = req.query.order == "asc" ? true : false;
    let banks = await bankService.list(order);
    let size = req.query.size || 10;
    let pageIndex = parseInt(req.query.page);
    result = banks.slice((pageIndex - 1) * size, size);
  } else if (req.query.index && req.query.size) {
    let index = parseInt(req.query.index);
    let size = parseInt(req.query.size);
    let banks = await bankService.list();
    let skip = size * (index - 1);
    result = banks.slice(skip, size);
  }

  return result;
};
