var { updates } = require("../models/update");

exports.lastUpdate = async () => {
  try {
    let result = await updates.findOne({}).exec();
    return result;
  } catch (error) {
    console.log(error);
  }
};
