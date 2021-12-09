const Influx = require('influx');

const client = new Influx.InfluxDB({
  host: 'localhost',
  database: 'aussenklima'
})

module.exports = client;