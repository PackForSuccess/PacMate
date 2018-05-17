const { Client } = require('pg');
const uri = 'postgres://swdvyewj:jg0Z8kF_9RjyD0xMujc_T1nAy7b5OYZg@pellefant.db.elephantsql.com:5432/swdvyewj';

//find this on db server
const USER = 'swdvyewj';
const PASS = 'jg0Z8kF_9RjyD0xMujc_T1nAy7b5OYZg';

let config = {
    host: 'pellefant.db.elephantsql.com',
    user: USER,
    password: PASS,
    database: USER,
    post: 5432,
    ssl: true
}

//Generating pool API
let db = new Pool(config);

// db.connect((err, result) => {
//     if (err) throw new Error();
//     else console.log(`Connected to the database...`);
// });

module.exports = db;