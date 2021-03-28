const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const cors = require('cors');
const mongoose  = require('mongoose');
const userRouter = require('./routes/user-router');
const app = express();
const http = require('http');
const https = require('https');
require('dotenv').config();
const uri = process.env.MONGO_URI
const path = require('path')

app.use(express.urlencoded());
app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../schillinger-system/client/build')))
app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname + '../schillinger-system/client/build'))
})


const PORT = 27017;
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb://schillAdmin:schillp4ssword%21@206.189.226.215:27017/schillinger-DB?authSource=admin&w=1");

client.connect();

mongoose.connect("mongodb://localhost:27017/schillinger-DB?authSource=admin", {user:'schillAdmin', pass:'schillp4ssword!', useNewUrlParser: true, useFindAndModify: false });

mongoose.connection.once('open', function() {
	console.log('Connected to the Database.');
})
mongoose.connection.on('error', function(error) {
	console.log('Mongoose Connection Error: ' + error);
})

// app.get('/', (req, res) => {
// 	res.send("hello world");
// })


app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PATCH, DELETE, OPTIONS'
	);
	next();
})

app.use('/api', userRouter);

if (process.env.NODE_ENV === "production") {
	const privKey = fs.readFileSync('/etc/letsencrypt/live/learnschillinger.com/privkey.pem', 'utf8');
	const certificate = fs.readFileSync('/etc/letsencrypt/live/learnschillinger.com/cert.pem', 'utf8');
	const ca = fs.readFileSync('/etc/letsencrypt/live/learnschillinger.com/chain.pem', 'utf8');
	const credentials = {
		key: privKey,
		cert: certificate,
		ca: ca
	};

	https.createServer(credentials, app).listen(403, () => {
		console.log('HTTPS Server running on port 403')
	});
	// http.createServer( function(req, res) {
	// 	res.writeHead(301, {"Location": "https://" + req.headers['host'] + req.url});
	// 	res.end();
	// }).listen(80);
} else {
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
}
