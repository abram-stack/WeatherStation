const express = require('express');
const client = require('../dbClient');
const router = express.Router();

router.get('/', (req, res) => {
  client.query(`select * from pressure`)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send({ error }))
})

router.get('/:station', (req, res) => {
  const {station} = req.params;
  client.query(`select * from pressure where station = '${station}'`)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send({ error }))
})

module.exports = router;
