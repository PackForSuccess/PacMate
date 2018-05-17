const passport = require('passport');
const db = require('../database')
const LocalStrategy = require('passport-local').Strategy;

const authController = {};

// authController.serializeUser = passport.serializeUser((user, done) => {
//     console.log('inside serializeUser', user)
//     done(null, user.id)
// })

// authController.deserializeUser = passport.deserializeUser((id, cb) => {
//     db.query('SELECT id, username, type FROM users WHERE id = $1', [parseInt(id, 10)], (err, results) => {
//         if (err) {
//             console.log('Error when selecting user on session deserialize', err)
//             return cb(err)
//         }
//         console.log(id + '<=====deserializer');
//         cb(null, user)
//     })
// })

//localStrategy takes a function as a parameter with 3 params - username, password, and callback
authController.local = passport.use(new LocalStrategy((username, password, cb) => {
    console.log('inside locallll', username)
    db.query('SELECT username, password, type FROM users WHERE username=$1', [username], (err, result) => {
        if (err) {
            console.log('Error when selecting user on login', err)
            return cb(err)
        }
        if (result) {
            console.log('result', result)
            // bcrypt.compare(password, first.password, function (err, res) {
            //     if (res) {
            //         cb(null, { id: first.id, username: first.username, type: first.type })
            //     } else {
            //         cb(null, false)
            //     }
        }
        console.log('error in selecting user on login')
        // } else {
        //     cb(null, false)
    })
}))

module.exports = authController;
