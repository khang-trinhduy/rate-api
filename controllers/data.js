var { banks } = require('../models/bank')
var { rates } = require('../models/rate/import')
var { rates_seed } = require('../models/rate/seed')
var { updates } = require('../models/update')
var { fools } = require('../models/rate/aprilfool')
var { after } = require('../models/rate/afternoon')
const { horizons } = require('../models/rate/horizon')
const { bs } = require('../models/rate/bs')
const { twilight } = require('../models/rate/twilight')
const { shinichi } = require('../models/rate/shinichi')
const { kagura } = require('../models/rate/kagura')
const { okay } = require('../models/rate/okay')
var bankService = require('../services/bank')

exports.import = (req, res, next) => {
  let updated = 0
  banks.find({}, (error, result) => {
    if (error) {
      res.status(500).send(error)
    } else if (!result) {
      res.status(404).send({ error: 'cannot find any banks' })
    } else {
      result.forEach((bank) => {
        let name = bank.name
        if (name) {
          let rates = rates_seed.filter((e) => e.bank == name)
          if (rates && rates.length > 0) {
            bank.interests = rates
            bank.save()
            updated++
          } else {
            console.log('rates not found for bank ' + bank.name)
          }
        } else {
          console.log('id not found')
        }
      })
      res.status(200).json({ updated: `${updated} documents` })
    }
  })
}

exports.update = async (req, res, next) => {
  let updated = 0
  if (req.query.fool) {
    let banks = await bankService.list()
    let results = []
    banks.forEach((bank) => {
      let interests = fools.filter((e) => e.bank === bank.name)
      if (!interests) {
        console.log('cannot find update for ' + bank.name)
      } else {
        if (!bank.interests) {
          bank.interests = []
        }
        bank.interests = bank.interests.concat(interests)
        bank.save()
        results.push(bank)
        updates.findOneAndUpdate(
          {},
          { date: Date.now() },
          { upsert: true, new: true },
          (error, update) => {
            if (error) {
              console.log(error)
            } else {
            }
          }
        )
      }
    })
    res.status(200).json({ banks: results })
  } else if (req.query.horizon) {
    let banks = await bankService.list()
    let results = []
    banks.forEach((bank) => {
      let interests = horizons.filter((e) => e.bank === bank.name)
      if (!interests) {
        console.log('cannot find update for ' + bank.name)
      } else {
        if (!bank.interests) {
          bank.interests = []
        }
        bank.interests = bank.interests.concat(interests)
        bank.save()
        results.push(bank)
        updates.findOneAndUpdate(
          {},
          { date: Date.now() },
          { upsert: true, new: true },
          (error, update) => {
            if (error) {
              console.log(error)
            } else {
            }
          }
        )
      }
    })
    res.status(200).json({ banks: results })
  } else if (req.query.okay) {
    let banks = await bankService.list()
    let results = []
    banks.forEach((bank) => {
      let interests = okay.filter((e) => e.bank == bank.code)
      if (!interests) {
        console.log('cannot find update for ' + bank.name)
      } else {
        if (!bank.interests) {
          bank.interests = []
        }
        bank.interests = bank.interests.concat(interests)
        bank.save()
        results.push(bank)
        updates.findOneAndUpdate(
          {},
          { date: Date.now() },
          { upsert: true, new: true },
          (error, update) => {
            if (error) {
              console.log(error)
            } else {
            }
          }
        )
      }
    })
    res.status(200).json({ banks: results })
  } else if (req.query.shinichi) {
    let banks = await bankService.list()
    let results = []
    banks.forEach((bank) => {
      let interests = shinichi.filter((e) => e.bank === bank.name)
      if (!interests) {
        console.log('cannot find update for ' + bank.name)
      } else {
        if (!bank.interests) {
          bank.interests = []
        }
        bank.interests = bank.interests.concat(interests)
        bank.save()
        results.push(bank)
        updates.findOneAndUpdate(
          {},
          { date: Date.now() },
          { upsert: true, new: true },
          (error, update) => {
            if (error) {
              console.log(error)
            } else {
            }
          }
        )
      }
    })
    res.status(200).json({ banks: results })
  } else if (req.query.kagura) {
    let banks = await bankService.list()
    let results = []
    banks.forEach((bank) => {
      let interests = kagura.filter((e) => e.bank === bank.name)
      if (!interests) {
        console.log('cannot find update for ' + bank.name)
      } else {
        if (!bank.interests) {
          bank.interests = []
        }
        bank.interests = bank.interests.concat(interests)
        bank.save()
        results.push(bank)
        updates.findOneAndUpdate(
          {},
          { date: Date.now() },
          { upsert: true, new: true },
          (error, update) => {
            if (error) {
              console.log(error)
            } else {
            }
          }
        )
      }
    })
    res.status(200).json({ banks: results })
  } else if (req.query.twilight) {
    let banks = await bankService.list()
    let results = []
    banks.forEach((bank) => {
      let interests = twilight.filter((e) => e.bank === bank.name)
      if (!interests) {
        console.log('cannot find update for ' + bank.name)
      } else {
        if (!bank.interests) {
          bank.interests = []
        }
        bank.interests = bank.interests.concat(interests)
        bank.save()
        results.push(bank)
        updates.findOneAndUpdate(
          {},
          { date: Date.now() },
          { upsert: true, new: true },
          (error, update) => {
            if (error) {
              console.log(error)
            } else {
            }
          }
        )
      }
    })
    res.status(200).json({ banks: results })
  } else if (req.query.bs) {
    let banks = await bankService.list()
    let results = []
    banks.forEach((bank) => {
      let interests = bs.filter((e) => e.bank === bank.name)
      if (!interests) {
        console.log('cannot find update for ' + bank.name)
      } else {
        if (!bank.interests) {
          bank.interests = []
        }
        bank.interests = bank.interests.concat(interests)
        bank.save()
        results.push(bank)
        updates.findOneAndUpdate(
          {},
          { date: Date.now() },
          { upsert: true, new: true },
          (error, update) => {
            if (error) {
              console.log(error)
            } else {
            }
          }
        )
      }
    })
    res.status(200).json({ banks: results })
  } else if (req.query.after) {
    let banks = await bankService.list()
    let results = []
    banks.forEach((bank) => {
      let interests = after.filter((e) => e.bank === bank.name)
      if (!interests) {
        console.log('cannot find update for ' + bank.name)
      } else {
        if (!bank.interests) {
          bank.interests = []
        }
        bank.interests = bank.interests.concat(interests)
        bank.save()
        results.push(bank)
        updates.findOneAndUpdate(
          {},
          { date: Date.now() },
          { upsert: true, new: true },
          (error, update) => {
            if (error) {
              console.log(error)
            } else {
            }
          }
        )
      }
    })
    res.status(200).json({ banks: results })
  } else {
    rates.forEach((rate) => {
      if (rate.bank) {
        banks
          .findOne({ normalized: rate.bank.toLowerCase() })
          .select('interests name')
          .exec((error, result) => {
            if (error) {
              failed++
              console.error(error)
            } else if (!result) {
              console.log(`bank ${rate.bank} not found`)
            } else {
              if (!result.interests) {
                result.interests = []
              }
              result.interests.push(rate)
              result.save((err, ok) => {
                if (ok) {
                  updates.findOneAndUpdate(
                    {},
                    { date: Date.now() },
                    { upsert: true, new: true },
                    (error, update) => {
                      if (error) {
                        console.log(error)
                      } else {
                      }
                    }
                  )
                  updated++
                  console.log(`${result.name} updated`)
                }
              })
            }
          })
      } else {
        console.log('invalid rate')
      }
    })
    res.status(200).send({ updated: updated, total: rates.length })
  }
}

exports.purge = async (req, res, next) => {
  try {
    let results = []
    let banks = await bankService.list()
    for (let i = 0; i < banks.length; i++) {
      let result = {}
      let bank = banks[i]
      let rates = bank.interests
      result.total = rates.length
      result.name = bank.name
      let newRates = []
      for (let j = 0; j < rates.length; j++) {
        let rate = rates[j]
        if (!rate.online) {
          newRates.push(rate)
        }
      }
      result.new = newRates.length
      bank.interests = newRates
      bank.save()
      results.push(result)
    }
    res.status(200).json(results)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
