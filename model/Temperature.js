const client = require('../dbClient');

// // function to write to temperature, using dummy data
const writeDataToInflux = (locationObject) => {
  // we want to insert to db as point, so we loop
  locationObject.rawtemp.rawTempObs.forEach(tempPoint => {
    // line protocol convention
    client.writePoints([
      {
        measurement: 'temperature',
        tags: {
          unit: locationObject.rawtemp.tempInfo[0].units, //is a need because, front end need to render unit
          location: locationObject.rawtemp.tempInfo[0].location //messstationid
          // sensorId eg.201
          // messstation id
          },
        fields: { temperature: tempPoint.temp },//data,
        timestamp: tempPoint.epoch
      }
    ], { database: 'aussenklima', precision: 's' })
      .catch(error => {
      console.log(`Error saving data into Influx ${error}`)
    })
  });
}
module.exports.writeTemperature = writeDataToInflux;