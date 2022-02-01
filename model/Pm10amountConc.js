// Model for measurement : humidity 
const client = require('../dbClient');
const debug = require('debug')('app:dbinsert')

// // function to write to humidity, using dummy data
const writeDataToInflux = (locationObject) => {
  // we want to insert to db as point, so we loop
  locationObject.rawData.rawDataObs.forEach(dataPoint => {
    // line protocol convention
    client.writePoints([
      {
        measurement: 'pm10amountConc',
        tags: {
          sensor: locationObject.rawData.dataInfo[0].sensor, // sensorId eg.201
          station: locationObject.rawData.dataInfo[0].station //messstationid
        },
        fields: { data: dataPoint.data },//data,
        timestamp: dataPoint.epoch
      }
    ], { database: 'aussenklima', precision: 's' })
      .then(result => debug('Insert Ok'))
      .catch(error => {
      debug(`Error saving data into Influx ${error}`)
    })
  });
}

module.exports.writePm10amountConc = writeDataToInflux;