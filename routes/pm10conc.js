const express = require('express');
const router = express.Router();
const client = require('../dbClient');
const pm10Conc = require('../model/Pm10conc');

router.get('/', async (req, res) => {
  try {
    const result = await pm10Conc.getpm10Conc();
    res.status(200).send({ 'name': 'PM10 Massenkonzentration', 'unit': 'µg/m³', 'dataArray': result })
  } catch (error) {
    res.status(500).json({ error });
  }
})

router.get('/:station', async(req, res) => {
  const { station } = req.params;
  try {
    const result = await pm10Conc.getpm10ConcByStation(station);
    res.status(200).json({'name':'PM10 Massenkonzentration','unit':'µg/m³','dataArray':result})
  } catch (error) {
    res.status(500).json({ error });
  }
})

router.get('/:station/:functions', async(req, res) => {
  const { station, functions } = req.params;
  try {
    if (functions == 'mean') {
      const result = await pm10Conc.getpm10ConcMean(station);
      res.status(200).send({'name':'PM10 Massenkonzentration','unit':'µg/m³','mean': result.map(me => me.mean)[0]})
    }
    else
      res.status(500).send('bad request no functions');
  } catch (error) {
    res.status(500).json({error})
  }
});

module.exports = router;
// v0
// router.get('/', (req, res) => {
//   client.query(`select * from pm10conc`)
//   .then(result => res.status(200).send({'name':'PM10 Massenkonzentration','unit':'µg/m³','dataArray':result}))
//   .catch(error => res.status(500).send({error}))
// });
// router.get('/:station', (req, res) => {
//   const { station } = req.params;
//   client.query(`select * from pm10conc where station = '${station}'`)
//     .then(result => res.status(200).send({'name':'PM10 Massenkonzentration','unit':'µg/m³','dataArray':result}))
//     .catch(error => res.status(500).send({ error }));
// });