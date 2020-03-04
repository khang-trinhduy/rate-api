var { ratestats } = require("../models/statistic/rate");

sendJsonResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

exports.list = (req, res, next) => {
  ratestats.find({}, (error, result) => {
    if (error) {
      sendJsonResponse(res, 400, error);
    } else {
      sendJsonResponse(res, 200, result);
    }
  });
};

exports.show = (req, res, next) => {
  if (!req.params.period && !req.params.id) {
    sendJsonResponse(res, 400, { error: "bad request" });
  } else {
    if (req.params.id) {
      ratestats.findById(req.params.id, (error, rate) => {
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
      ratestats.findOne({ period: req.params.period }, (error, rate) => {
        if (error) {
          sendJsonResponse(res, 400, error);
        } else if (!rate) {
          sendJsonResponse(res, 404, { error: "not found" });
        } else {
          sendJsonResponse(res, 200, rate);
        }
      });
    }
  }
};
