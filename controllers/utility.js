var { utilities } = require("../models/utility");

var sendJsonResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

exports.show = (req, res, next) => {
  if (!req.params.id && !req.query.b) {
    sendJsonResponse(res, 400, { error: "id or code are required" });
  } else {
    if (req.params.id) {
      utilities.findById(req.params.id, (error, utility) => {
        if (error) {
          sendJsonResponse(res, 400, error);
        } else {
          if (utility) {
            sendJsonResponse(res, 200, utility);
          } else {
            sendJsonResponse(res, 404, {
              error: `utility with id ${id} not found`
            });
          }
        }
      });
    } else {
      utilities.findOne({ code: req.query.b.toLowerCase() }, (error, result) => {
        if (error) {
          sendJsonResponse(res, 400, error);
        } else if (!result) {
          sendJsonResponse(res, 404, {
            error: `utility with code ${req.query.b} not found`
          });
        } else {
          sendJsonResponse(res, 200, result);
        }
      });
    }
  }
};

exports.list = (req, res, next) => {
  utilites.find({}, (error, result) => {
    if (error) {
      sendJsonResponse(res, 400, error);
    } else {
      sendJsonResponse(res, 200, result);
    }
  });
};
