const client = require('../dbClient');
const debug = require('debug')('app:dbinsert');

// // function to write to temperature, using dummy data
const writeDataToInflux = (locationObject) => {
  // we want to insert to db as point, so we loop
  locationObject.rawData.rawDataObs.forEach(dataPoint => {
    // line protocol convention
    client.writePoints([
      {
        measurement: 'temperature',
        tags: {
          sensor: locationObject.rawData.dataInfo[0].sensor,
          station: locationObject.rawData.dataInfo[0].station//messstationid
          // sensorId eg.201
          // messstation id
          },
        fields: { data: dataPoint.data },//data,
        timestamp: dataPoint.epoch
      }
    ], { database: 'aussenklima', precision: 's' })
      .then(() => { 
        debug('Writing to DB: ok');
      })
      .catch(error => {
      debug(`Error saving data into Influx ${error}`)
    })
  });
}
const getTemp = async() => { 
  const result = await client.query(`select * from temperature`);
  return result;
}

const getTempByStation = async (station) => { 
  const result = await client.query(`select * from temperature where station = '${station}'`)
  return result;
}

const getTempMean = async (station) => {
  const result = await client.query(`select mean(data) from temperature where station = '${station}'`)
  return result;
}
module.exports.writeTemperature = writeDataToInflux;
module.exports.getTemp = getTemp;
module.exports.getTempByStation = getTempByStation;
module.exports.getTempMean = getTempMean;