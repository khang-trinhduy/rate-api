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
  console.log(req.query);

  if (!req.query.type && !req.params.id) {
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
      ratestats.findOne(
        { type: req.query.type.toLowerCase() },
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
