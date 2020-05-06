var express = require('express')

var bankCtrl = require('../controllers/bank')
var rateCtrl = require('../controllers/rate')
var authCtrl = require('../controllers/authentication')
var dataCtrl = require('../controllers/data')
var userCtrl = require('../controllers/user')
var updateCtrl = require('../controllers/update')
var statCtrl = require('../controllers/stat')
var downloadCtrl = require('../controllers/download')

var router = express.Router()

function handleError(fn) {
  return function (req, res, next) {
    return fn(req, res, next).catch(next)
  }
}

// bank controller
router.get('/banks', bankCtrl.list)
router.delete('/banks/:id', bankCtrl.delete)
router.get('/banks/search', bankCtrl.search)
router.get('/banks/snapshot', bankCtrl.snapshot)
router.get('/banks/detail', bankCtrl.show)
router.post('/banks', bankCtrl.create)
router.get('/banks/:id', bankCtrl.detail)

// rate controller
router.get('/rates/all', rateCtrl.list)
router.get('/rates', handleError(rateCtrl.show))
router.post('/rates', rateCtrl.create)
router.get('/rates/top', rateCtrl.top)
router.get('/rates/search', rateCtrl.search)
router.get('/rates/recommend', rateCtrl.recommend)
router.post('/rates/import', rateCtrl.import)
router.get('/rates/:id', rateCtrl.getById)
router.put('/rates', handleError(rateCtrl.deleteMultiples))

// data controller
router.get('/data/import', dataCtrl.import)
router.get('/data/update', dataCtrl.update)
router.get('/data/purge', dataCtrl.purge)
router.get('/data/latest', handleError(dataCtrl.latest))
router.get('/data/generate', handleError(dataCtrl.generate))

router.post('/users', userCtrl.subscribe)

router.post('/login', authCtrl.login)

router.post('/register', authCtrl.register)

router.get('/update', updateCtrl.show)

router.get('/stats', statCtrl.list)

router.get('/download', downloadCtrl.get)

module.exports = router
