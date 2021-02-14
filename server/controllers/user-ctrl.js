/* 
	Author: Michael Alaniz | Semester: Fall 2020 - Spring 2021
	
	Purpose:
	All User related API requests are controlled via this file.
	e.g. Create Users, Update Progress, Login, Get Progress, ...
*/

const env = require('dotenv');
const jwt = require('jsonwebtoken');
const User = require('../models/user-model');
const path = require('path');
const crypto = require('crypto');
const { isNull } = require('util')

env.config({path: path.resolve(__dirname, '../.env')});

var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
}

var genRandomString = function(length){
	return crypto.randomBytes(Math.ceil(length/2))
			.toString('hex') /** convert to hexadecimal format */
			.slice(0,length);   /** return required number of characters */
  }

function saltHashPassword(userpassword) {
	var salt = genRandomString(16); /** Gives us salt of length 16 */
	var passwordData = sha512(userpassword, salt);
	// console.log('UserPassword = '+userpassword);
	// console.log('Passwordhash = '+passwordData.passwordHash);
	// console.log('nSalt = '+passwordData.salt);
  
	return {
	  passwordHash:passwordData.passwordHash,
	  salt:passwordData.salt
	};
}

const createUser = async (req, res) => 
{
	var err = "";
	let progress = new Array(14).fill(new Array(6).fill(0));
	progress[0][0] = 0;
	let interaction = new Array(20).fill(0);
	let dateInteracted = new Array(20);

	const { username, password }  = req.body;
	
	var userCheck = await User.findOne({ username: username });

	if (userCheck) 
	{
		err = "User with that username already exists.";
		return res.status(400).json({error: err});
	}

	var {passwordHash, salt} = saltHashPassword(password);

	console.log(salt);
	
	const user = new User({ 
		username: username, 
		password: passwordHash,
		salt: salt,  
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

const login = async (req, res) => {
	var error = "";
	
	const {username, password} = req.body;
	
	var userCheck = await User.findOne({ username: username });

	if (userCheck !== null)
	{
		var hashedPass = sha512(password, userCheck.salt)

		const passCheck = await User.findOne({username: username, password:hashedPass.passwordHash});

		if(passCheck){

			var token = jwt.sign({id:userCheck._id}, process.env.SECRET, { expiresIn: '4h' })

			jwt.verify(token, process.env.SECRET, function(err, decoded){
				if (err !== null)
					error = err.message;
			})
		}
		else
			error = 'Invalid username/password1';
	}
	
	else
		error = 'Invalid username/password2';

	return res.status(200).json({ error: error, jwt: token});
}

const validation = async (req, res) => {
	const {token} = req.body;
	var uId = '';
	var error = '';
	var newToken = '';
  
	jwt.verify(token, process.env.SECRET, function(err, decoded)
	{
	  // if error, save error to send back to front end.
	  if (!isNull(err))
	  {
		error = err.message;
	  }
	  else if (isNull(err))
	  {
		uId = decoded.id;
		newToken = jwt.sign({id:uId}, process.env.SECRET, { expiresIn: '3d' });
	  }
	})
  
	var ret = {jwt:newToken,error:error};
	res.status(200).json(ret);
	// check the time remaining on the token to verify
	// if expired, ping back that this token is expired/useless
	// if time is left, we go ahead and reset the time left
}

const logout = async (req, res) => {
	const {token} = req.body;
	var uId = '';
	var error = '';
	var newToken = '';
  
	jwt.verify(token, process.env.SECRET, function(err, decoded)
	{
	  // if error, save error to send back to front end.
	  if (!isNull(err))
	  {
		if (err.message === "jwt expired")
		  error = "You are already logged out."
		else
		  error = err.message;
	  }
	  else if (isNull(err))
	  {
		uId = decoded.id;
		newToken = jwt.sign({id:uId}, process.env.SECRET, { expiresIn: '1s' });
	  }
	})
  
	var ret = {jwt:newToken,error:error};
	res.status(200).json(ret);
}

module.exports = 
{
	createUser,
	updateProgress,
	getProgress,
	login,
	logout,
	validation
}
