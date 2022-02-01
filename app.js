const express = require('express');
const client = require('./dbClient');
const debug = require('debug')('app:start');

// temporary dummy data
const humidStation0 = require('./data/humid_st0');
const humidStation1 = require('./data/humid_st1');  
const co2Station0 = require('./data/co2_st0');
const co2Station1 = require('./data/co2_st1');
const pressStation0 = require('./data/pressure_st0');
const pressStation1 = require('./data/pressure_st1');
const tempStation0 = require('./data/temp_st0');
const tempStation1 = require('./data/temp_st1');
// feinstaub
const pm2_5concStation0 = require('./data/pm2_5conc_st0');
const pm10concStation0 = require('./data/pm10conc_st0');
const pm2_5amountConcStation0 = require('./data/pm2_5amountConc_st0');
const pm10amountConcStation0 = require('./data/pm10amountConc_st0');

const pm2_5concStation1 = require('./data/pm2_5conc_st1');
const pm2_5amountConcStation1 = require('./data/pm2_5amountConc_st1');
const pm10concStation1 = require('./data/pm10conc_st1');
const pm10amountConcStation1 = require('./data/pm10amountConc_st1');

const brStation0 = require('./data/brightness_st0');
const brStation1 = require('./data/brightness_st1');

const temperature = require('./routes/temperature');
const humidity = require('./routes/humidity');
const co2 = require('./routes/co2');
const pressure = require('./routes/pressure');
const stations = require('./routes/station');
const sensors = require('./routes/sensor');
const pm2_5conc = require('./routes/pm2_5conc');
const pm10conc = require('./routes/pm10conc');
const pm2_5amountConc = require('./routes/pm2_5amountConc');
const pm10amountConc = require('./routes/pm10amountConc');
const brightness = require('./routes/brightness');

const { writeTemperature } = require('./model/Temperature');
const { writeHumidity } = require('./model/Humidity');
const { writeCo2 } = require('./model/Co2');
const { writePressure } = require('./model/Pressure');
const { writePm2_5conc } = require('./model/Pm2_5conc');
const { writePm10conc } = require('./model/Pm10conc');
const { writePm10amountConc } = require('./model/Pm10amountConc');
const { writePm2_5amountConc } = require('./model/Pm2_5amountConc');

const { writeBrightness} = require('./model/Brightness');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS proxy
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next(); // Important
})

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
    // write dummy data  database here:
  })
  .catch(error => console.log({ error }));

//API router to query data from db 
app.use('/api/temperature', temperature);
app.use('/api/humidity', humidity);
app.use('/api/co2', co2);
app.use('/api/pressure', pressure);
app.use('/api/pm2_5conc', pm2_5conc);
app.use('/api/pm10conc', pm10conc);
app.use('/api/pm2_5amountConc', pm2_5amountConc);
app.use('/api/pm10amountConc', pm10amountConc);
app.use('/api/brightness', brightness);
app.use('/api/stations', stations);
app.use('/api/sensors', sensors);
