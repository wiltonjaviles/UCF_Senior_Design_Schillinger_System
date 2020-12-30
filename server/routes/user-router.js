const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/createUser', UserCtrl.createUser)
router.put('/updateProgress', UserCtrl.updateProgress)
router.post('/getProgress', UserCtrl.getProgress)

module.exports = router
