var { informations } = require("../models/info");

sendJsonResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

exports.list = (req, res, next) => {
  informations.find({}, (error, result) => {
    if (error) {
      sendJsonResponse(res, 400, error);
    } else {
      sendJsonResponse(res, 200, result);
    }
  });
};

exports.show = (req, res, next) => {
  if (!req.query.type && !req.params.id) {
    sendJsonResponse(res, 400, { error: "bad request" });
  } else {
    if (req.params.id) {
      informations.findById(req.params.id, (error, rate) => {
        if (error) {
          sendJsonResponse(res, 400, error);
        } else if (!rate) {
          sendJsonResponse(res, 404, {
            error: `rate id ${req.params.id} not found`
          });
        } else {
          sendJsonResponse(res, 200, rate);
        }
      });
    } else {
      informations.findOne(
        { lower_name: req.query.type.toLowerCase() },
        (error, rate) => {
          if (error) {
            sendJsonResponse(res, 400, error);
          } else if (!rate) {
            sendJsonResponse(res, 404, { error: "not found" });
          } else {
            sendJsonResponse(res, 200, rate);
          }
        }
      );
    }
  }
};
