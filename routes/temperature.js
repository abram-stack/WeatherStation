const express = require('express');
const router = express.Router();
const client = require('../dbClient');

router.get('/', (req, res) => {
  client.query(`select * from temperature`)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).json({ error }));
})

router.get('/:location', (req, res) => {
  const { location } = req.params;
  // we query using InfluxQL here:
  client.query(`select * from temperature where location = '${location}'`)
    .then(result => res.status(200).json(result))
    .catch(error => res.status(500).json({ error }));
})
module.exports = router;