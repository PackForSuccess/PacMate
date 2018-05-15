//npm modules
const express = require('express');
const path = require('path');
//the express instance;
const app = express();


//import database module
const db = require('./database')

//import controllers below ////******////// ////******////// ////******//////


////******//////////******//////////******//////////******//////////******//////

//constants for cookies and body parser
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//serve static files
app.use(express.static(path.join(__dirname, './../public')));

//serve homepage
app.get('/api', (req, res) => {
	console.log('hit the home route');
	if (req.user) {
		res.sendFile(path.join(__dirname, '../public/index.html'));	
	}
	else res.redirect('/api/login');
});

//add endpoints here
app.post('/api/createUser', (req, res) => {
	console.log('hit the createUser route');
});

app.get('/api/login', (req, res) => {
	console.log('hit the login route');
});

app.get('/api/logout', (req, res) => {
	console.log('hit the logout route');
});

app.post('/api/newTrip', (req, res) => {
	console.log('hit the newTrip route');
});

app.post('/api/editSuitcase', (req, res) => {
	console.log('hit the editSuitcase route');
});

app.post('/api/editDefault', (req, res) => {
	console.log('hit the editDefault route');
});


//listening on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));

module.exports = app;