const User = require('../models/user-model')

const createUser = async (req, res) => 
{
	var error = ''
	const {username, password}  = req.body
	
	var userCheck = await User.findOne({username: username})

	if (userCheck) 
	{
		error = "User with that username already exists."
		return res.status(400).json({error: error})
	}

	const user = new User({username: username, password: password})
	await user
		.save()
	// saved!

	let ret = {error:error}
	res.status(200).json(ret)
}

const updateProgress = async (req, res) => 
{
	var err = ""
	const {username, progress} = req.body

	let userCheck = await User.findOne({username: username})

	if (userCheck)
		userCheck.progress = progress
	else
	{
		err = "User with that username not found."
		let ret = {error: err}
		return res.status(400).json(ret)
	}

	await userCheck
		.save()
		.then(() => 
		{
			let ret = {error: err}
			return res.status(200).json(ret)
		})
		.catch(error => {
			let ret = {error: error}
			return res.status(400).json(ret)
		})
}

const getProgress = async (req, res) => 
{
	var err = ""
	const {username} = req.body
	let userCheck = await User.findOne({username: username})

	if (userCheck)
	{
		let ret = {error: err, progress: userCheck.progress}
		return res.status(200).json(ret)
	}
	else
		return res.status(400).json({error:"User with that username not found"})
}

module.exports = 
{
	createUser,
	updateProgress,
	getProgress,
}
