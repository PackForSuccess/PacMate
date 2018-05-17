const path = require('path');
const db = require('../models/database.js');
const userController = {};

//update items
//that allows users to update their item preferences

userController.addItems = (req, res) => {
  db.query(`SELECT description from items WHERE climate=5 AND occasion=5;`,
    (err, result) => {
      if(err) throw err;
      res.send(result);
    }
  );
}

module.exports = userController;