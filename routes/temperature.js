const express = require('express');
const router = express.Router();
const client = require('../dbClient');

router.get('/', (req, res) => {
  client.query(`select * from temperature`)
    .then(result => res.status(200).send({'name':'Temperature','unit':'°c','dataArray':result}))
    .catch(error => res.status(500).json({ error }));
})

router.get('/:station', (req, res) => {
  const { station } = req.params;
  // we query using InfluxQL here:
  client.query(`select * from temperature where station = '${station}'`)
    .then(result => res.status(200).json({'name':'Temperature','unit':'°C','dataArray':result}))
    .catch(error => res.status(500).json({ error }));
})

router.get('/:station/:functions', async(req, res) => {
  const { station,functions } = req.params;
  try {
    if (functions == 'mean') {
      const result = await client.query(`select mean(data) from temperature where station = '${station}'`);
      res.status(200).send({'name':'Temperature','unit':'°C','dataArray':result});
    }
  }
  catch (error) { 
    res.status(500).json({error})
  }
})

module.exports = router;