// Model for measurement : humidity 
const client = require('../dbClient');

// // function to write to humidity, using dummy data
const writeDataToInflux = (locationObject) => {
  // we want to insert to db as point, so we loop
  locationObject.rawData.rawDataObs.forEach(dataPoint => {
    // line protocol convention
    client.writePoints([
      {
        measurement: 'humidity',
        tags: {
          units: locationObject.rawData.dataInfo[0].units, //talked to frontend dev, units is needed to render to client
          sensor: locationObject.rawData.dataInfo[0].sensor, // sensorId eg.201
          station: locationObject.rawData.dataInfo[0].station //messstationid
          },
        fields: { dataPoint: data.temp },//data,
        timestamp: tempPoint.epoch
      }
    ], { database: 'aussenklima', precision: 's' })
      .catch(error => {
      console.log(`Error saving data into Influx ${error}`)
    })
  });
}
module.exports.writeTemperature = writeDataToInflux;