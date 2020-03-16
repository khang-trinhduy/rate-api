var { contacts } = require("../models/contact");

exports.subscribe = async (req, res, next) => {
  try {
    var result = await contacts.findOneAndUpdate(
      {
        $or: [{ email: req.body.email }, { phone: req.body.phone }]
      },
      req.body,
      { upsert: true, new: true }
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(201).json(error);
  }
};
