const express = require('express');
const client = require('./dbClient');
const debug = require('debug')('app:start');

// place temporary dummy data here:

// Routes
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

// Models
const temperatureModel = require('./model/Temperature');
const humidityModel = require('./model/Humidity');
const co2Model = require('./model/Co2');
const pressureModel = require('./model/Pressure');
const pm2_5concModel = require('./model/Pm2_5conc');
const Pm10concModel = require('./model/Pm10conc');
const pm10amountConcModel = require('./model/Pm10amountConc');
const pm2_5amountConcModel = require('./model/Pm2_5amountConc');
const brightnessModel = require('./model/Brightness');

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
    //eg: temperatureModel.writeTemperature(tempStation1);
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
app.use('/api/bright', brightness);
app.use('/api/stations', stations);
app.use('/api/sensors', sensors);
