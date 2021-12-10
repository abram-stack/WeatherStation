const _ = require('lodash');

const startTs = 1639004400 * 1000;
const endTs = 1639090800 * 1000;


module.exports = {
  "rawtemp": {
    "tempInfo": [
      {
        "location": "locationBeta",
        "units" : "celcius"
      }
    ],
    "rawTempObs": [
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
            },
            {
                "epoch": new Date(_.random(startTs, endTs)),
                "temp": _.random(-1,3)
    }
  ]}
}