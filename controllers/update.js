var { updates } = require("../models/update");

exports.show = async (req, res, next) => {
  try {
    let update = await updates.findOne({}).exec();
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json(error);
  }
};
