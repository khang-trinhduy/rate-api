var mongoose = require("mongoose");
var gracefulShutdown;
var dbURI = "mongodb://localhost/interestrate";

if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI
}

var { banks } = require("../models/bank");
const { banks_seed } = require("../models/bank/seed");

mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to " + dbURI);
  banks.find({}, (error, result) => {
    if (!error && result.length <= 0) {
      banks.insertMany(banks_seed, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(
            `inserted ${banks_seed.length} documents to the database`
          );
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
