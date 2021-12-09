const express = require('express');
const Influx = require('influx');
const locA = require('./data/temp_locA');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create constructor for set up connection and set up schema with local influxDB
const influx = new Influx.InfluxDB({
  host: 'localhost',
  database: 'aussenklima',
  schema: [
    {
      measurement: 'temperature',
      fields: {temperature: Influx.FieldType.FLOAT},
      tags: ['location', 'unit']
    }
  ]
})

// // function to write to db, using dummy data
const writeDataToInflux = (locationObject) => {
  // we want to insert to db as point, so we loop
  locationObject.rawtemp.rawTempObs.forEach(tempPoint => {
    // line protocol convention
    influx.writePoints([
      {
        measurement: 'temperature',
        tags: {
          unit: locationObject.rawtemp.tempInfo[0].units,
          location: locationObject.rawtemp.tempInfo[0].location
          },
        fields: { temperature: tempPoint.temp },
        timestamp: tempPoint.epoch
      }
    ], { database: 'aussenklima', precision: 's' })
      .catch(error => {
      console.log(`Error saving data into Influx ${error}`)
    })
  });
}

// getDatabaseNames return a promise
influx.getDatabaseNames()
  .then(names => {
    if (!names.includes('aussenklima'))
      return influx.createDatabase('aussenklima');
  })
  .then(() => {
    app.listen(port, function () {
      console.log(`running on server ${port}...`);
    });
    // we can write into database here:
    writeDataToInflux(locA);
    
  })
  .catch(error => console.log({ error }));


app.get('/', (req, res) => {
  res.send('Hello from server');
})

app.get('/api/temperature/:place', (req, res) => {
  // read the url params
  const { place } = req.params;
  // we query using InfluxQL here:
  influx.query(`select * from temperature where location = '${place}'`)
    .then(result => res.status(200).json(result))
    .catch(error => res.status(500).json({ error }));
})

