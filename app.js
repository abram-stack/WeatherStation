const express = require('express');
const client = require('./dbClient');
const locA = require('./data/temp_locA');
const locB = require('./data/temp_locB');
const station0 = require('./data/humid_st0');
const station1 = require('./data/humid_st1');
const temperature = require('./routes/temperature');
const humidity = require('./routes/humidity');

const { writeTemperature } = require('./model/Temperature');
const { writeHumidity } = require('./model/Humidity');

const app = express();

const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
//   next(); // Important
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// getDatabaseNames return a promise
client.getDatabaseNames()
  .then(names => {
    if (!names.includes('aussenklima'))
      return client.createDatabase('aussenklima');
  })
  .then(() => {
    app.listen(port, function () {
      console.log(`running on server ${port}...`);
    });
    // we can write into database here:
    // writeTemperature(locB);
    //writeHumidity(station0);
    //writeHumidity(station1);
  })
  .catch(error => console.log({ error }));

app.use('/api/temperature', temperature);
app.use('/api/humidity', humidity);