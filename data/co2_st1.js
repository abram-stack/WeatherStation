// dummy data for station0 from sensor 201
const _ = require('lodash');

const startTs = 1639263600 * 1000; //12. 12. 2021 00:00
const endTs = 	1639350000 * 1000; //12. 12. 2021 24:00

module.exports = {
  "rawData": {
    "dataInfo": [
      {
        "sensor": "212",
        "station": "1",
        "units" : "ppm"
      }
    ],
    "rawDataObs": [
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
            },
            {
               "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)

            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)

            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)

            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
                
            },
            {
               "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1000, 2000, true)
              
    }
  ]}
}