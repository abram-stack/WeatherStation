const express = require('express');
const client = require('../dbClient');
const router = express.Router();
const pressure = require('../model/Pressure');

router.get('/', async (req, res) => {
  try {
    const result = await pressure.getPressure();
    res.status(200).send({ 'name': 'Luftdruck', 'unit': 'hPa', 'dataArray': result })
  } catch (error) {
    res.status(500).json({ error });
  }
})
router.get('/:station', async(req, res) => {
  const { station } = req.params;
  try {
    const result = await pressure.getPressureByStation(station);
    res.status(200).json({'name':'Luftdruck','unit':'hPa','dataArray':result})
  } catch (error) {
    res.status(500).json({ error });
  }
})
router.get('/:station/:functions', async(req, res) => {
  const { station, functions } = req.params;
  try {
    if (functions == 'mean') {
      const result = await pressure.getPressureMean(station);
      res.status(200).send({'name':'Luftdruck','unit':'hPa','mean': result.map(me => me.mean)[0]})
    }
    else
      res.status(500).send('bad request: functions not available')
  } catch (error) {
    res.status(500).json({error})
  }
})

module.exports = router;

// version 0
// router.get('/', (req, res) => {
//   client.query(`select * from pressure`)
//     .then(result => res.status(200).send({'name':'Luftdruck','unit':'hPa','dataArray':result}))
//     .catch(error => res.status(500).send({ error }))
// })

// router.get('/:station', (req, res) => {
//   const {station} = req.params;
//   client.query(`select * from pressure where station = '${station}'`)
//     .then(result => res.status(200).send({'name':'Luftdruck','unit':'hPa','dataArray':result}))
//     .catch(error => res.status(500).send({ error }))
// })