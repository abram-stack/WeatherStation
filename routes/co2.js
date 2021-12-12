const express = require('express');
const router = express.Router();
const client = require('../dbClient');

router.get('/', (req, res) => {
  client.query(`select * from co2`)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send({ error }))
  
});

router.get('/:station', (req, res) => {
  const { station } = req.params;
  client.query(`select * from co2 where station = '${station}'`)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send({ error }))
})

module.exports = router;