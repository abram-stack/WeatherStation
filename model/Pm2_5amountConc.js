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
        measurement: 'pm2_5amountConc',
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
const getpm25amountConc = async() => { 
  const result = await client.query(`select * from pm2_5amountConc`);
  return result;
}

const getpm25amountConcByStation = async (station) => { 
  const result = await client.query(`select * from pm2_5amountConc where station = '${station}'`)
  return result;
}

const getpm25amountConcMean = async (station) => {
  const result = await client.query(`select mean(data) from pm2_5amountConc where station = '${station}'`)
  return result;
}

module.exports.writePm2_5amountConc = writeDataToInflux;
module.exports.getpm25amountConc = getpm25amountConc;
module.exports.getpm25amountConcByStation = getpm25amountConcByStation ;
module.exports.getpm25amountConcMean = getpm25amountConcMean ;