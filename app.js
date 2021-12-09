const express = require('express');
const client = require('./dbClient');
const locA = require('./data/temp_locA');
const temperature = require('./routes/temperature');
const {writeTemperature} = require('./model/Temperature');

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
      console.log(`running on server ${port}...`);
    });
    // we can write into database here:
    //writeTemperature(locA);
  })
  .catch(error => console.log({ error }));

app.use('/api/temperature', temperature);
