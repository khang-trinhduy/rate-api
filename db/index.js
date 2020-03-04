var mongoose = require("mongoose");
var gracefulShutdown;
var dbURI = "mongodb://localhost/interestrate";

if (process.env.NODE_ENV === "production") {
  dbURI = process.env.MONGOLAB_URI;
}

var { banks } = require("../models/bank");
var { ratestats } = require("../models/statistic/rate");
var { informations } = require("../models/info");
var { rates } = require("../models/rate");
const { banks_seed } = require("../models/bank/seed");
const { ratestat_seed } = require("../models/statistic/seed");
const { infos } = require("../models/info/seed");
const { utilities } = require("../models/utility");
const { utility_seed } = require("../models/utility/seed");
const { rates_seed } = require("../models/rate/seed");

mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to " + dbURI);
  informations.find({}, (err, res) => {
    if (!err && res.length <= 0) {
      informations.insertMany(infos, (error, result) => {
        if (error) {
          console.log(error);
        } else if (result) {
          console.log(`inserted ${result.length} documents to the database`);
        }
      });
    }
  });
  utilities.find({}, (err, res) => {
    if (!err && res.length <= 0) {
      utilities.insertMany(utility_seed, (error, result) => {
        if (error) {
          console.log(error);
        } else if (result) {
          console.log(`inserted ${result.length} documents to the database`);
        }
      });
    }
  });
  ratestats.find({}, (error, result) => {
    if (!error && result.length <= 0) {
      ratestats.insertMany(ratestat_seed, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(
            `inserted ${ratestat_seed.length} documents to the database`
          );
        }
      });
    }
  });
  banks.find({}, (error, result) => {
    if (!error && result.length <= 0) {
      banks.insertMany(banks_seed, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`inserted ${res.length} documents to the database`);
        }
      });
    }
  });
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

mongoose.connection.on("error", err => {
  console.log("Mongoose connection error: " + err);
});

gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected through " + msg);
    callback();
  });
};

process.once("SIGUSR2", function() {
  gracefulShutdown("nodemon restart", function() {
    process.kill(process.pid, "SIGUSR2");
  });
});
process.on("SIGINT", function() {
  gracefulShutdown("app termination", function() {
    process.exit(0);
  });
});
process.on("SIGTERM", function() {
  gracefulShutdown("Heroku app shutdown", function() {
    process.exit(0);
  });
});
