// dummy data for station0 from sensor 201
const _ = require('lodash');

const startTs = 1639263600 * 1000; //12. 12. 2021 00:00
const endTs = 	1639350000 * 1000; //12. 12. 2021 24:00

module.exports = {
  "rawData": {
    "dataInfo": [
      {
        "sensor": "202",
        "station": "0",
        "units" : "hPa"
      }
    ],
    "rawDataObs": [
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
            },
            {
               "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)

            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)

            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)

            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
                
            },
            {
               "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(1, 1.1, true)
              
    }
  ]}
}