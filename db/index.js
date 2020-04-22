const color = require('colors')
var mongoose = require('mongoose')
var gracefulShutdown
var dbURI = 'mongodb://localhost/interestrate'

if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGOLAB_URI
} else if (process.env.NODE_ENV === 'docker') {
  dbURI = process.env.DOCKER_DB_URL
}

var { banks } = require('../models/bank')
var { ratestats } = require('../models/statistic/rate')
var { informations } = require('../models/info')
var { rates } = require('../models/rate')
const { banks_seed } = require('../models/bank/seed')
const { ratestat_seed } = require('../models/statistic/seed')
const { infos } = require('../models/info/seed')
const { utilities } = require('../models/utility')
const { utility_seed } = require('../models/utility/seed')
const { rates_seed } = require('../models/rate/seed')

mongoose.connect(dbURI)

mongoose.connection.on('connected', () => {
  console.log('Successful connect to database at ' + dbURI.bgGreen)
  ratestats.find({}, (error, result) => {
    if (!error && result.length <= 0) {
      ratestats.insertMany(ratestat_seed, (err, res) => {
        if (err) {
          console.log(err)
        } else {
          console.log(`inserted ${ratestat_seed.length} documents to the database`)
        }
      })
    }
  })
  banks.find({}, (error, result) => {
    if (!error && result.length <= 0) {
      banks.insertMany(banks_seed, (err, res) => {
        if (err) {
          console.log(err.red)
        } else {
          console.log(`inserted ${res.length} documents to the database`.green)
        }
      })
    }
  })
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected'.gray)
})

async function wait(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function countdown(second, msg) {
  while (second > 0) {
    console.log(`${msg}${second}...`.yellow)
    second--
    await wait(1000)
  }
}

mongoose.connection.on('error', async (err) => {
  console.error(`Mongoose connection error: ${err}`.bgRed)
  await wait(5)
  await countdown(5, 'retry connecting in ...'.blue)
  mongoose.connect(dbURI)
})

gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg)
    callback()
  })
}

process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2')
  })
})
process.on('SIGINT', function () {
  gracefulShutdown('app termination', function () {
    process.exit(0)
  })
})
process.on('SIGTERM', function () {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0)
  })
})
