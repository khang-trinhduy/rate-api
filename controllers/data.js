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

function transform(rate) {
  return {
    period: rate.period,
    value: rate.value,
    id: rate._id,
    online: rate.online,
    threshold: rate.threshold,
    created: rate.lastUpdate,
  }
}

function getRate(period, array) {
  return array.find((e) => e.period === period)
    ? transform(array.find((e) => e.period === period))
    : { period: period, status: 'unsupport' }
}

function getLatestRates(rates) {
  const onlines = rates.filter((e) => e.online)
  const offlines = rates.filter((e) => !e.online)
  onlines.sort((a, b) => {
    const date1 = new Date(a.lastUpdate)
    const date2 = new Date(b.lastUpdate)
    return date1 > date2 ? -1 : 1
  })
  offlines.sort((a, b) => {
    const date1 = new Date(a.lastUpdate)
    const date2 = new Date(b.lastUpdate)
    return date1 > date2 ? -1 : 1
  })
  const results = {
    online: [
      getRate(0, onlines),
      getRate(1, onlines),
      getRate(2, onlines),
      getRate(3, onlines),
      getRate(6, onlines),
      getRate(9, onlines),
      getRate(12, onlines),
      getRate(13, onlines),
      getRate(18, onlines),
      getRate(24, onlines),
      getRate(36, onlines),
    ],
    offline: [
      getRate(0, offlines),
      getRate(1, offlines),
      getRate(2, offlines),
      getRate(3, offlines),
      getRate(6, offlines),
      getRate(9, offlines),
      getRate(12, offlines),
      getRate(13, offlines),
      getRate(18, offlines),
      getRate(24, offlines),
      getRate(36, offlines),
    ],
  }
  return results
}

getData = async () => {
  const banks = await bankService.list()
  let results = []
  for (let i = 0; i < banks.length; i++) {
    const bank = banks[i]
    let result = {}
    result = { bank: bank.name, rates: {} }
    result.rates = getLatestRates(bank.interests)
    results.push(result)
  }
  return results
}

exports.latest = async (req, res, next) => {
  const result = await getData()
  res.status(200).json(result)
}

exports.generate = async (req, res, next) => {
  const latestRates = await getData()
  const date = new Date(req.query.date)
  let count = 0
  let errors = 0
  for (let i = 0; i < latestRates.length; i++) {
    const item = latestRates[i]
    let bank = await banks.findOne({ name: item.bank })
    for (let j = 0; j < item.rates.online.length; j++) {
      const rate = item.rates.online[j]
      const copy = rate.status
        ? {}
        : {
            period: rate.period,
            value: rate.value,
            lastUpdate: date,
            online: rate.online,
            threshold: rate.threshold,
            bank: rate.bank
          }
      if (bank && copy) {
        count++
        bank.interests.push(copy)
        await bank.save()
      } else {
        errors++
        console.log(`bank ${rate.bank} not found or rate unsupported`)
      }
    }
    for (let j = 0; j < item.rates.offline.length; j++) {
      const rate = item.rates.offline[j]
      const copy = rate.status
        ? {}
        : {
            period: rate.period,
            value: rate.value,
            lastUpdate: date,
            online: rate.online,
            threshold: rate.threshold,
          }
      if (bank && copy) {
        count++
        bank.interests.push(copy)
        await bank.save()
      } else {
        errors++
        console.log(`bank ${rate.bank} not found or rate unsupported`)
      }
    }
  }
  res.status(200).json({ updated: count, skipped: errors })
}
