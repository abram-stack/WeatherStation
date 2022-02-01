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

module.exports.writePressure = writeDataToInflux;