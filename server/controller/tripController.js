const fetch = require('node-fetch');
const db = require('../database')

const tripController = {};

tripController.getLocation = (req, res, next) => {
  console.log('in the trip controller');

  fetch('https://www.metaweather.com/api/location/search/?query=denver', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(response => {
      return response.json()
  }).then(result => {

      res.locals.location = result;
      return next();
  }).catch(err => {
    console.log('ERROR!', err);
  });

}


tripController.getWeather = (req, res, next) => {
    let woeid = res.locals.location[0].woeid;
    fetch(`https://www.metaweather.com/api/location/${woeid}/2013/4/27/ `, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      }).then(response => {
          return response.json()
      }).then(result => {
          let midDay = result[Math.floor(result.length/2)]
          res.locals.weather = midDay;
          return next();
      }).catch(err => {
        console.log('ERROR!', err);
      });
}


tripController.addTrip = (req, res) => {
  let tempObj = {
      1: [24, 100],
      2: [-50, 5],
      3: [6, 13],
      4: [14, 23]
  }

  let t = Math.floor(res.locals.weather.the_temp);
  let temp = 4;
  for (let tempkey in tempObj) {
      if (t >= tempObj[tempkey][0] && t <= tempObj[tempkey][1]) {
        temp = tempkey;
      }
  }
  let user_id = 2;
  let location = 'denver';
  let occasion = 3;
  let deparute_date = 'June 1, 2018';
  let trip_length = 12;
  const addTripQuery = `
  Insert into trips (user_id, location, temp, occasion, departure_date, trip_length) values (${user_id}, '${location}', ${temp}, ${occasion}, '${deparute_date}', ${trip_length});`;
  db.query(addTripQuery, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result);
    }
  })
}


tripController.getChecklist = (req, res) => {
let user_id = 3;
let climate = 2;
let occasion = 2;
const getChecklistQuery = `
Select (description) from items where (user_id = 1 or user_id = ${user_id}) and (climate = 5 or climate = ${climate}) and (occasion = 5 or occasion = ${occasion});`;
db.query(getChecklistQuery, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result);
    }
  })
}

module.exports = tripController;