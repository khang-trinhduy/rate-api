var { updates } = require("../models/update");

exports.lastUpdate = async () => {
  try {
    let result = await updates.findOne({}).exec();
    return result;
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (date) => {
  try {
    let currentUpdate = await updates.findOne({}).exec();
    currentUpdate.data = date;
    let result = currentUpdate.save();
    return result;
  } catch (error) {
    console.error(error);
    return {};
  }
};
