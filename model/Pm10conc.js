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
        measurement: 'pm10conc',
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

const getpm10Conc = async() => { 
  const result = await client.query(`select * from pm10conc`);
  return result;
}

const getpm10ConcByStation = async (station) => { 
  const result = await client.query(`select * from pm10conc where station = '${station}'`)
  return result;
}

const getpm10ConcMean = async (station) => {
  const result = await client.query(`select mean(data) from pm10conc where station = '${station}'`)
  return result;
}

module.exports.writePm10conc = writeDataToInflux;
module.exports.getpm10Conc = getpm10Conc;
module.exports.getpm10ConcByStation = getpm10ConcByStation;
module.exports.getpm10ConcMean = getpm10ConcMean;

