const client = require('../dbClient');
const debug = require('debug')('app:dbinsert');

const writeDataToInflux = (locationObject) => {
  locationObject.rawData.rawDataObs.forEach(dataPoint => {
    client.writePoints([{
      measurement: 'pressure',
      tags: {
        sensor: locationObject.rawData.dataInfo[0].sensor,
        station: locationObject.rawData.dataInfo[0].station
      },
      fields: { data: dataPoint.data },
      timestamp: dataPoint.epoch
    }
    ], { database: 'aussenklima', precision: 's' })
      .then(() => {
        debug('Writing to DB: ok');
      })
      .catch(error => debug(`Error saving data into Influx ${error}`));
  });
}

const getPressure = async() => { 
  const result = await client.query(`select * from pressure`);
  return result;
}

const getPressureByStation = async (station) => { 
  const result = await client.query(`select * from pressure where station = '${station}'`)
  return result;
}

const getPressureMean = async (station) => {
  const result = await client.query(`select mean(data) from pressure where station = '${station}'`)
  return result;
}

module.exports.writePressure = writeDataToInflux;
module.exports.getPressure = getPressure;
module.exports.getPressureByStation = getPressureByStation;
module.exports.getPressureMean = getPressureMean;

