var { users } = require('../models/user')
var { banks } = require('../models/bank')
var { rates } = require('../models/rate')
var rateService = require('../services/rate')
var bankService = require('../services/bank')
var updateService = require('../services/update')

var sendJsonResponse = (res, status, content) => {
  res.status(status)
  res.json(content)
}

exports.show = async (req, res, next) => {
  let rates = await rateService.list()
  const date = new Date(req.query.date)
  let result = rates.filter((rate) => {
    const lastUpdate = new Date(rate.lastUpdate)
    return date.toDateString() === lastUpdate.toDateString()
  })
  res.status(200).json(result)
}

exports.list = (req, res, next) => {
  banks
    .find({ 'interests.period': 12 })
    .select('name interests.value interests.period')
    .exec((err, result) => {
      if (err) {
        sendJsonResponse(res, 500, err)
      } else if (!result) {
        sendJsonResponse(res, 404, { error: 'not found' })
      } else {
        sendJsonResponse(res, 200, result)
      }
    })
}

exports.top = async (req, res, next) => {
  try {
    let period = [0, 1, 2, 3, 6, 9, 12, 13, 18, 24, 36]
    if (req.query.period && req.query.period != 'NaN') {
      if (req.query.period.length > 1) {
        period = req.query.period.map((x) => parseInt(x))
      } else {
        period = [parseInt(req.query.period)]
      }
    }
    let result
    if (req.query.code && req.query.code != 'NaN') {
      result = await banks.aggregate([
        {
          $match: {
            normalized: req.query.code.toLowerCase(),
          },
        },
        {
          $unwind: '$interests',
        },
        {
          $match: {
            'interests.period': { $in: period },
          },
        },
        {
          $group: {
            _id: null,
            interests: { $push: '$interests' },
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
      ])
    } else {
      result = await banks.aggregate([
        {
          $unwind: '$interests',
        },
        {
          $match: { 'interests.period': { $in: period } },
        },
        {
          $group: {
            _id: null,
            interests: { $push: '$interests' },
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
      ])
    }
    if (req.query.size) {
      if (req.query.period) {
        result = result[0].interests
          .sort((a, b) => b.value - a.value)
          .slice(0, parseInt(req.query.size))
      }
    } else {
      if (req.query.period) {
        result = result[0].interests.sort((a, b) => b.value - a.value)
      }
    }
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

exports.search = async (req, res, next) => {
  try {
    let value = parseFloat(req.query.value)
    let rates = await rateService.list()
    let result = rateService.filter(value, rates)
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'server fault' })
  }
}

exports.getById = async (req, res, next) => {
  try {
    let id = req.params.id
    let rates = await rateService.list()
    let result
    for (let i = 0; i < rates.length; i++) {
      const rate = rates[i]
      if (id == rate._id) {
        result = rate
      }
    }
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'server fault' })
  }
}

exports.recommend = async (req, res, next) => {
  try {
    let size = parseInt(req.query.size)
    let except = req.query.exp
    let lastUpdate = await updateService.lastUpdate()
    let rates = await rateService.list()
    rates.sort((a, b) => b.value - a.value)
    let map = rateService.reduce(rates, lastUpdate.date.toDateString())
    let results = []
    for (let i = 0; i < size; i++) {
      results.push(map.next().value[1])
    }
    for (let i = 0; i < results.length; i++) {
      const result = results[i]
      if (result.value === parseFloat(except)) {
        results.splice(i, 1)
      }
    }
    res.status(200).json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'server fault' })
  }
}

exports.create = async (req, res, next) => {
  try {
    let bank = await bankService.getByCode(req.body.bank)
    let rate = rateService.parseFromBody(req)
    bank.interests.push(rate)
    await updateService.update(Date.now())
    let result = await bank.save()
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'server fault' })
  }
}

exports.delete = async (req, res, next) => {
  try {
    let bank = await bankService.getById(req.params.bankid)
    let index = bank.interests.findIndex((e) => e._id == req.params.rateid)
    bank.interests.slice(rate, 1)
    let result = await bank.save()
    res.status(204).json(result)
  } catch (error) {
    res.status(500).json({ error: 'server fault' })
  }
}

exports.deleteMultiples = async (req, res, next) => {
  const ratesToDelete = req.body
  console.log(`deleting ${ratesToDelete.length} rates`)
  let result = {}
  result.total = ratesToDelete.length
  let removed = 0
  let errors = 0
  for (let i = 0; i < ratesToDelete.length; i++) {
    const rate = ratesToDelete[i]
    const bank = await banks.findOne({ $or: [{ name: rate.bank }, { normalized: rate.bank }] })
    if (!bank) {
      errors++
      continue
    }
    const idx = bank.interests.findIndex((item) => item._id == rate._id)
    if (idx < 0) {
      errors++
      continue
    }
    removed++
    bank.interests.splice(idx, 1)
    await bank.save()
  }
  result.removed = removed
  result.errors = errors
  res.status(200).json(result)
}
