const express = require('express');
const router = express.Router();
const client = require('../dbClient');
const temperature = require('../model/Temperature');

router.get('/', async (req, res) => {
  try {
    const result = await temperature.getTemp();
    res.status(200).send({ 'name': 'Temperatur', 'unit': '°c', 'dataArray': result })
  } catch (error) {
    res.status(500).json({ error });
  }
})


router.get('/:station', async(req, res) => {
  const { station } = req.params;
  try {
    const result = await temperature.getTempByStation(station);
    res.status(200).json({'name':'Temperatur','unit':'°C','dataArray':result})
  } catch (error) {
    res.status(500).json({ error });
  }
})

router.get('/:station/:functions', async(req, res) => {
  const { station,functions } = req.params;
  try {
    if (functions == 'mean') {
      // const result = await client.query(`select mean(data) from temperature where station = '${station}'`);
      const result = await temperature.getTempMean(station);
      res.status(200).send({ 'name': 'Temperatur', 'unit': '°C', 'mean': result.map(me => me.mean)[0]});
    }
  }
  catch (error) { 
    res.status(500).json({error})
  }
})

// v1
// router.get('/', (req, res) => {
//   client.query(`select * from temperature`)
//     .then(result => res.status(200).send({'name':'Temperature','unit':'°c','dataArray':result}))
//     .catch(error => res.status(500).json({ error }));
// })

// router.get('/:station', (req, res) => {
//   const { station } = req.params;
//   // we query using InfluxQL here:
//   client.query(`select * from temperature where station = '${station}'`)
//     .then(result => res.status(200).json({'name':'Temperature','unit':'°C','dataArray':result}))
//     .catch(error => res.status(500).json({ error }));
// })
module.exports = router;