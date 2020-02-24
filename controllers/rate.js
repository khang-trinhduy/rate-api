var { banks } = require("../models/bank");

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
      utilities.findOne(
        { code: req.query.b.toLowerCase() },
        (error, result) => {
          if (error) {
            sendJsonResponse(res, 400, error);
          } else if (!result) {
            sendJsonResponse(res, 404, {
              error: `utility with code ${req.query.b} not found`
            });
          } else {
            sendJsonResponse(res, 200, result);
          }
        }
      );
    }
  }
};

exports.list = (req, res, next) => {
  if (!req.query.t || !req.query.p || !req.query.s) {
    sendJsonResponse(res, 400, { error: "all params required" });
  } else {
    banks.find({}, (error, result) => {
      if (error) {
        sendJsonResponse(res, 400, error);
      } else {
        sendJsonResponse(res, 200, result);
        
      }
    });
  }
};

exports.top = (req, res, next) => {
  if (!req.query.type || !req.query.period || !req.query.sort) {
    sendJsonResponse(res, 400, { error: "bad request" });
  } else {
    banks.find(
      { normalized: ["vietcombank", "agribank", "bidv", "vietinbank", "vib"] },
      (error, result) => {
        if (result) {
          sendJsonResponse(res, 200, result);
        } else if (error) {
          sendJsonResponse(res, 400, error);
        } else {
          sendJsonResponse(res, 404, { error: "not found" });
        }
      }
    );
  }
};

exports.history = (req, res, next) => {
  sendJsonResponse(res, 200, [
    
  ])
}