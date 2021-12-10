const express = require('express');
const client = require('./dbClient');
const locA = require('./data/temp_locA');
const locB = require('./data/temp_locB');
const temperature = require('./routes/temperature');
const {writeTemperature} = require('./model/Temperature');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    // we can write into database here:
    // writeTemperature(locB);
  })
  .catch(error => console.log({ error }));

app.use('/api/temperature', temperature);
