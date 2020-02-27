var { reviews } = require("../models/review");
var { users } = require("../models/user");
var { banks } = require("../models/bank");

var sendJsonResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

exports.create = (req, res, next) => {
  if (
    !req.params.id ||
    !req.body.message ||
    !req.body.bank ||
    !req.body.stars
  ) {
    sendJsonResponse(res, 400, "id, message, bank, and stars area required");
  } else {
    users.findById(req.params.id, (error, user) => {
      if (error) {
        sendJsonResponse(res, 400, error);
      } else if (!user) {
        sendJsonResponse(res, 404, `user with id ${req.params.id} not found`);
      } else {
        banks.findById(req.body.bank, (err, bank) => {
          if (err) {
            sendJsonResponse(res, 400, err);
          } else if (!bank) {
            console.log(req.body.bank);

            sendJsonResponse(
              res,
              404,
              `bank with id ${req.body.bank} not found`
            );
          } else {
            var review = {
              title: req.body.title,
              message: req.body.message,
              stars: req.body.stars,
              bank: bank._id,
              user: user._id
            };
            reviews.create(review, (er, result) => {
              if (er) {
                sendJsonResponse(res, 400, er);
              } else {
                sendJsonResponse(res, 201, result);
              }
            });
          }
        });
      }
    });
  }
};

exports.list = (req, res, next) => {
  if (!req.query.bank && !req.query.user) {
    sendJsonResponse(res, 400, "bank id required");
  } else {
    reviews.find(
      { $or: [{ bank: req.query.bank }, { user: req.query.user }] },
      (error, result) => {
        if (error) {
          sendJsonResponse(res, 400, error);
        } else {
          sendJsonResponse(res, 200, result);
        }
      }
    );
  }
};

exports.show = (req, res, next) => {
  if (!req.params.id) {
    sendJsonResponse(res, 400, { error: "id required" });
  } else {
    reviews.findById(req.params.id, (error, review) => {
      if (error) {
        sendJsonResponse(res, 400, error);
      } else if (!review) {
        sendJsonResponse(res, 404, `review with id ${req.params.id} not found`);
      } else {
        sendJsonResponse(res, 200, review);
      }
    });
  }
};

exports.summary = (req, res, next) => {
  if (!req.params.id) {
    sendJsonResponse(res, 400, { error: "id required" });
  } else {
    reviews.find({ bank: req.params.id }, (error, reviews) => {
      if (error) {
        sendJsonResponse(res, 400, error);
      } else if (!reviews) {
        sendJsonResponse(res, 404, `review with id ${req.params.id} not found`);
      } else {
        let avgStars = 0;
        for (let i = 0; i < reviews.length; i++) {
          const review = reviews[i];
          avgStars += review.stars;
        }
        avgStars = Math.floor(avgStars / reviews.length);
        sendJsonResponse(res, 200, {
          average: avgStars,
          total: reviews.length
        });
      }
    });
  }
};

exports.delete = (req, res, next) => {
  if (!req.params.id || !req.params.reviewid) {
    sendJsonResponse(res, 400, { error: "user id and review id required" });
  } else {
    users.findById(req.params.id, (error, user) => {
      if (error) {
        sendJsonResponse(res, 400, error);
      } else if (!user) {
        sendJsonResponse(res, 404, `user with id ${req.params.id} not found`);
      } else {
        reviews.deleteOne({ _id: req.params.reviewid }, (error, result) => {
          if (error) {
            sendJsonResponse(res, 400, error);
          } else {
            sendJsonResponse(res, 204, result);
          }
        });
      }
    });
  }
};
