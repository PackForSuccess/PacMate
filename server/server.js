const express = require('express');
const path = require('path');
const db = require('./database')
// const router = require('./routes')
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const LocalStrategy = require('passport-local').Strategy;

// const secret = 'randomString';
// const sessConfig = {
// 	secret,
//     resave: false,
//     saveUninitialized: false  
// } 

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
    session: false
}, (req, username, password, done) => {
    db.query('SELECT username, password, user_id FROM account WHERE username=$1', [username], (err, result) => {
        if (err) {
            console.log('errrorrr time', err)
            return done(err)
        }
        if (result.rows[0].username === username) {
            console.log('insideeeee if of user.row[0]', result.rows[0])
            return (result.rows[0].username === username) ? done(null, result) : done(null, false);
        }
    })
}))

passport.serializeUser((result, done) => {
    console.log('inside serializeUser', result)
    done(null, result.rows[0].user_id)
})

passport.deserializeUser((id, done) => {
    console.log('inside deserialize', result)
    db.query('SELECT user_id, username FROM account WHERE user_id = $1', [parseInt(id, 10)], (err, user) => {
        if (err) {
            console.log('Error when selecting user on session deserialize', err)
            return cb(err)
        }
        done(null, user.rows[0])
    })
})

//serve static files
app.use(express.static(path.join(__dirname, './../public')));
app.use(session({ secret: 'cats' }));
// app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// connecting passport to piggpack off of express
// app.use(session(sessConfig))
// // Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize())
app.use(passport.session())

// //pass all endpoints into the file routes
// app.use('/api', router)

app.get('/', (req, res) => {
    console.log('hit the home route');
    res.sendFile(path.join(__dirname, '../public/index.html'));
}
);

app.get('/login', (req, res) => {
    console.log('inside login get method')
    res.render('login');
}
);

//configuring routes to use passport
app.post('/api/login',
    passport.authenticate('local'),
    function (req, res) {
        console.log('authentication was successfullll!!!', req.body)
        res.json(req.body);
    }
);

//listening on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));

module.exports = app;