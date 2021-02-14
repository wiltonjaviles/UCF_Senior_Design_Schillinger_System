const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
	{
		// token: { type: String, required: true},
		username: { type: String, required: true },
		password: { type: String, required: true },
		salt: { type: String, required: true },
		progress: { type: Array, required: true },
		interaction: { type: Array, required: true},
		dateInteracted: { type: Array, required: true }
	},
	{ 
		timestamps: true,
		versionKey: false
	},
)

module.exports = mongoose.model('users', User)