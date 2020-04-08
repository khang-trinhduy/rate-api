const bankService = require("../services/bank");

exports.bankQueryHandler = async (req) => {
  let result = {};
  if (req.query.sort && req.query.order && req.query.page) {
    let order = req.query.order == "asc" ? true : false;
    let banks = await bankService.list(order);
    let total = banks.length;
    let size = parseInt(req.query.size) || 10;
    let pageIndex = parseInt(req.query.page);
    let items = banks.splice(pageIndex * size, size);
    result = {
      total_count: total,
      items: items,
    };
  } else if (req.query.index && req.query.size) {
    let index = parseInt(req.query.index);
    let size = parseInt(req.query.size);
    let banks = await bankService.list();
    let total = banks.length;
    let skip = size * (index - 1);
    let items = banks.slice(skip, size);
    result = {
      total_count: total,
      items: items,
    };
  }
  return result;
};
