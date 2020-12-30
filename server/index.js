const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose  = require('mongoose')
const userRouter = require('./routes/user-router')
const filesRouter = require('./routes/files-router')
const app = express()
require('dotenv').config()
const uri = process.env.MONGO_URI

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000
const MongoClient = require('mongodb').MongoClient
const client = new MongoClient(uri)

client.connect()

mongoose.connect(uri, { useNewUrlParser: true, useFindAndModify: false });
mongoose.connection.once('open', function() {
	console.log('Connected to the Database.')
})
mongoose.connection.on('error', function(error) {
	console.log('Mongoose Connection Error: ' + error)
})

app.get('/', (req, res) => {
	res.send("hello world")
})

app.use('/api', userRouter)
app.use('/api', filesRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
