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

app.use(express.urlencoded());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 9000;
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri);

client.connect();

mongoose.connect(uri, { useNewUrlParser: true, useFindAndModify: false });

mongoose.connection.once('open', function() {
	console.log('Connected to the Database.');
})
mongoose.connection.on('error', function(error) {
	console.log('Mongoose Connection Error: ' + error);
})

app.get('/', (req, res) => {
	res.send("hello world");
})

app.use('/api', userRouter);

if (process.env.NODE_ENV === "production") {
	const privKey = fs.readFileSync('/etc/letsencrypt/live/learnschillinger.com/privkey.pem', 'utf8');
	const certificate = fs.readFileSync('/etc/letsencrypt/live/learnschillinger.com/cert.pem', 'utf8');
	const ca = fs.readFileSync('/etc/letsencrypt/live/learnschillingercom/chain.pem', 'utf8');
	const credentials = {
		key: privKey,
		cert: certificate,
		ca: ca
	};

	https.createServer(credentials, app).listen(443, () => {
		console.log('HTTPS Server running on port 443')
	});
	http.createServer( function(req, res) {
		res.writeHead(301, {"Location": "https://" + req.headers['host'] + req.url});
		res.end();
	}).listen(80);
} else {
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
