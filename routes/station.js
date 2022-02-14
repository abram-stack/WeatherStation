const express = require('express');
const router = express.Router();
const client = require('../dbClient');
const temperature = require('../model/Temperature');

router.get('/', async (req, res) => {
  try {
    const result = await temperature.getTemp();
    res.status(200).send(result.map((x) => x.station).filter((item, i, ar) => ar.indexOf(item) === i).map((str, index) => ({ name: 'Station ' + (index + 1), id: index  })))
  } catch (error) {
    res.status(500).json({ error });
  }
})

module.exports = router;

