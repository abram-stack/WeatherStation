const Influx = require('influx');

const client = new Influx.InfluxDB({
  host: 'localhost',
  port: 8086,
  database: 'aussenklima'
})

module.exports = client;