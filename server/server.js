//npm modules
const express = require('express');
const path = require('path');
//the express instance;
const app = express();


//import database module
const db = require('./database')

//import controllers below


//constants for cookies and body parser
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//serve static files
app.use(express.static(path.join(__dirname, './../public')));

app.get('/api', (req, res) => {
	console.log('hit the home route');
	res.send('from home api route');
});

//listening on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));

module.exports = app;