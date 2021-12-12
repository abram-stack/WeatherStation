// dummy data for station0 from sensor 201
const _ = require('lodash');

const startTs = 1639263600 * 1000; //12. 12. 2021 00:00
const endTs = 	1639350000 * 1000; //12. 12. 2021 24:00

module.exports = {
  "rawData": {
    "dataInfo": [
      {
        "sensor": "201",
        "station": "1",
        "units" : "%H"
      }
    ],
    "rawDataObs": [
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45, 55, true)
            },
            {
               "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)

            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)

            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)

            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
                
            },
            {
               "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55, true)
              
    }
  ]}
}