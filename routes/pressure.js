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

router.get('/:station/:functions', async(req, res) => {
  const { station, functions } = req.params;
  try {
    if (functions == 'mean') {
      const result = await client.query(`select mean(data) from pressure where station = '${station}'`)
      res.status(200).send(result)
    }
    else
      res.status(500).send('bad request: functions not available')
  } catch (error) {
    res.status(500).json({error})
  }
})

module.exports = router;
