var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongoose = require("mongoose");
var User = require("../models/user").users;
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {
  console.log("authenticating");
  if (!req.body.username || !req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      message: "All fields required"
    });
    return;
  }
  console.log("passed request body");
  var user = new User();
  user.name = req.body.username;
  user.email = req.body.email;
  console.log(user);
  user.setPassword(req.body.password);
  console.log("password created");
  user.save(function(err) {
    var token;
    if (err) {
      sendJSONresponse(res, 404, err);
    } else {
      token = user.generateJwt();
      sendJSONresponse(res, 200, {
        token: token
      });
    }
  });
};

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({ $or: [{ email: username }, { name: username }] }, function(
      err,
      user
    ) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (!user.validPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

module.exports.login = function(req, res) {
  if (!req.body.username || !req.body.password) {
    sendJSONresponse(res, 400, {
      message: "All fields required"
    });
    return;
  }
  passport.authenticate("local", function(err, user, info) {
    var token;
    if (err) {
      sendJSONresponse(res, 404, err);
      return;
    }
    if (user) {
      token = user.generateJwt();
      sendJSONresponse(res, 200, {
        token: token
      });
    } else {
      sendJSONresponse(res, 401, info);
    }
  })(req, res);
};
