// dummy data for station0 from sensor 206
const _ = require('lodash');

const startTs = 1639263600 * 1000; //12. 12. 2021 00:00
const endTs = 	1639350000 * 1000; //12. 12. 2021 24:00

module.exports = {
  "rawData": {
    "dataInfo": [
      {
        "sensor": "206",
        "station": "1",
        "units" : "°C"
      }
    ],
    "rawDataObs": [
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3,7,true), 3)
            },
            {
               "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, 7, true),3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)

            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)

            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)

            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
                
            },
            {
               "epoch": new Date(_.random(startTs, endTs)),
                "data": _.round(_.random(-3, true),3)
              
    }
  ]}
}