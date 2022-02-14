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
        measurement: 'co2',
        tags: {
          sensor: locationObject.rawData.dataInfo[0].sensor, // sensorId eg.201
          station: locationObject.rawData.dataInfo[0].station //messstationid
        },
        fields: { data: dataPoint.data },//data,
        timestamp: dataPoint.epoch
      }
    ], { database: 'aussenklima', precision: 's' })
      .then(() => {
        debug('Insert Database OK');
      })
      .catch(error => {
      debug(`Error saving data into Influx ${error}`)
    })
  });
}
const getCo2 = async() => { 
  const result = await client.query(`select * from co2`);
  return result;
}

const getCo2ByStation = async (station) => { 
  const result = await client.query(`select * from co2 where station = '${station}'`)
  return result;
}

const getCo2Mean = async (station) => {
  const result = await client.query(`select mean(data) from co2 where station = '${station}'`)
  return result;
  module.exports.writeCo2 = writeDataToInflux;
}
module.exports.writeDataToInflux = writeDataToInflux;
module.exports.getCo2 = getCo2;
module.exports.getCo2ByStation = getCo2ByStation;
module.exports.getCo2Mean= getCo2Mean ;