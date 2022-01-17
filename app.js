const express = require('express');
const client = require('./dbClient');
const debug = require('debug')('app:start');

const locA = require('./data/temp_locA');
const locB = require('./data/temp_locB');
const humidStation0 = require('./data/humid_st0');
const humidStation1 = require('./data/humid_st1');  
const co2Station0 = require('./data/co2_st0');
const co2Station1 = require('./data/co2_st1');
const pressStation0 = require('./data/pressure_st0');
const tempStation0 = require('./data/temp_st0');
const tempStation1 = require('./data/temp_st1');

const temperature = require('./routes/temperature');
const humidity = require('./routes/humidity');
const co2 = require('./routes/co2');
const pressure = require('./routes/pressure');

const { writeTemperature } = require('./model/Temperature');
const { writeHumidity } = require('./model/Humidity');
const { writeCo2 } = require('./model/Co2');
const { writePressure } = require('./model/Pressure');

const app = express();
const port = process.env.PORT || 3000;

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
      debug(`running on server ${port}...`);
    });
    // write dummy data  database here:
    // writeTemperature(tempStation0);
    // writeTemperature(tempStation1);
  })
  .catch(error => console.log({ error }));

//API router to query data from db 
app.use('/api/temperature', temperature);
app.use('/api/humidity', humidity);
app.use('/api/co2', co2);
app.use('/api/pressure', pressure);