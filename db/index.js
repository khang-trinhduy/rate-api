var mongoose = require("mongoose");
var gracefulShutdown;
var dbURI = "mongodb://localhost/interestrate";

if (process.env.NODE_ENV === "production") {
  dbURI = process.env.MONGOLAB_URI;
}

var { banks } = require("../models/bank");
var { ratestats } = require("../models/statistic/rate");
var { informations } = require("../models/info");
const { banks_seed } = require("../models/bank/seed");
const { ratestat_seed } = require("../models/statistic/seed");
const { infos } = require("../models/info/seed");

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

// generate = (rate, period) => {
//   ratestats.findOne({ type: period.toLowerCase() }, (error, result) => {
//     // handle update to statistic
//     if (error) {
//       console.log(error);
//     } else if (!result) {
//       console.log(`rate type ${period} not found`);
//       if (rate) {
//         let stat = {
//           count: 1,
//           maximum: rate.value,
//           minimum: rate.value,
//           type: period.toLowerCase()
//         };
//         ratestats.create(stat, (err, res) => {
//           if (err) {
//             console.log(err);
//           } else {
//           }
//         });
//       } else {
//         console.log(`rate ${period} is invalid`);
//       }
//       // create new statistic
//     } else {
//       if (rate) {
//         let update = false;
//         if (rate.value > result.maximum) {
//           result.maximum = rate.value;
//           update = true;
//         }
//         if (rate.value < result.minimum) {
//           result.minimum = rate.value;
//           update = true;
//         }
//         if (update) {
//           result.count++;
//           result.lastUpdated = Date.now();
//           result.save((err, res) => {
//             if (err) {
//               console.log(err);
//             } else if (res) {
//               console.log(`statistic ${result._id} updated`);
//             }
//           });
//         }
//         return
//       } else {
//         console.log("invalid rate");
//       }
//     }
//   });
// };

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
