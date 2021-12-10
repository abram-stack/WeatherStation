const _ = require('lodash');

const startTs = 1639004400 * 1000;
const endTs = 1639090800 * 1000;

const randomDate = new Date(_.random(startTs, endTs));
const date = new Date(startTs);

console.log(randomDate);
console.log(_.random(-2, 3));
