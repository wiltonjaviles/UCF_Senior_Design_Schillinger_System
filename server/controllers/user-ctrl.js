/* 

	Author: Michael Alaniz | Semester: Fall 2020 - Spring 2021
	
	Purpose:
	All User related API requests are controlled via this file.
	e.g. Creating Users, Updating Progress, Login, Getting Progress, ...

*/


const User = require('../models/user-model')

const createUser = async (req, res) => 
{
	var err = "";
	let progress = new Array(14).fill(new Array);
	progress[0][0] = 1;
	let interaction = new Array(20);
	let dateInteracted = new Array(20);

	const { username, password }  = req.body;
	
	var userCheck = await User.findOne({ username: username });

	if (userCheck) 
	{
		err = "User with that username already exists.";
		return res.status(400).json({error: err});
	}

	const user = new User({ 
		username: username, 
		password: password,  
		progress: progress, 
		interaction: interaction,
		dateInteracted: dateInteracted
	});

	await user
		.save()
		.then(() => 
		{
			return res.status(200).json({ error: err });
		})
		.catch(error => 
		{
			return res.status(400).json({ error: error });
		})
}

const updateProgress = async (req, res) => 
{
	var err = "";
	const { username, progress } = req.body;

	let userCheck = await User.findOne({ username: username });

	if (userCheck)
		userCheck.progress = progress;
	else
	{
		err = "User with that username not found.";
		return res.status(400).json({ error: err });
	}

	await userCheck
		.save()
		.then(() => 
		{
			return res.status(200).json({ error: err });
		})
		.catch(error => 
		{
			return res.status(400).json({ error: error });
		})
}

const getProgress = async (req, res) => 
{
	var err = "";
	const { username } = req.body;
	let userCheck = await User.findOne({ username: username });

	if (userCheck)
		return res.status(200).json({ error: err, progress: userCheck.progress });
	else
		return res.status(400).json({ error:"User with that username not found" });
}

module.exports = 
{
	createUser,
	updateProgress,
	getProgress,
}
