/* 

	Author: Michael Alaniz | Semester: Fall 2020 - Spring 2021
	
	Purpose:
	Route all user requests by loading the middleware function into it, this is then loaded in index.js

*/

const UserCtrl = require('../controllers/user-ctrl')
const express = require('express')
const router = express.Router()

router.post('/createUser', UserCtrl.createUser)
router.put('/updateProgress', UserCtrl.updateProgress)
router.post('/getProgress', UserCtrl.getProgress)

module.exports = router
