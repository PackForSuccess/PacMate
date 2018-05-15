const { Pool } = require('pg');

const USER = '';
const PASS = '';

let config = {
    host: "",
    user: USER,
    password: PASS,
    database: USER,
    post: 5432,
    ssl: true
}

//Generating pool API
let db = new Pool(configA);

db.connect((err, result) => {
    if (err) throw new Error();
    else console.log(`Connected to the database...`);
});

module.exports = db;