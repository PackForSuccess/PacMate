//npm modules
const express = require('express');
const path = require('path');
//the express instance;
const app = express();


//import database module
const db = require('./database')

//import controllers below ////******////// ////******////// ////******//////
const tripController = require('./controller/tripController')

////******//////////******//////////******//////////******//////////******//////

//constants for cookies and body parser
const cookieSession = require('cookie-session');
// const keys = require('./config/keys');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//serve static files
app.use(express.static(path.join(__dirname, './../public')));

//serve homepage
app.get('/', (req, res) => {
	console.log('hit the home route');
	if (req.user) {
		res.sendFile(path.join(__dirname, '../public/index.html'));	
	}
	else res.redirect('/login');
});

//add endpoints here
app.post('/createUser', (req, res) => {
	console.log('hit the createUser route');
});

app.get('/login', (req, res) => {
	console.log('hit the login route');
});

app.get('/logout', (req, res) => {
	console.log('hit the logout route');
});

app.get('/newTrip', tripController.getLocation, tripController.getWeather, tripController.addTrip, (req, res) => {
	res.json('yay');
});

app.post('/viewChecklist', (req, res) => {
	console.log('hit the editSuitcase route');
});

app.post('/editDefault', (req, res) => {
	console.log('hit the editDefault route');
});


//listening on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));

module.exports = app;