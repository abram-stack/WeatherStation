// dummy data for station0 from sensor 201
const _ = require('lodash');

const startTs = 1639263600 * 1000; //12. 12. 2021 00:00
const endTs = 	1639350000 * 1000; //12. 12. 2021 24:00

module.exports = {
  "rawtemp": {
    "tempInfo": [
      {
        "sensor": "201",
        "station": "0",
        "units" : "%H"
      }
    ],
    "rawTempObs": [
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
               "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.random(45,55)
            },
            {
               "epoch": new Date(_.random(startTs, endTs)),
              "data": _.random(45,55)
    }
  ]}
}