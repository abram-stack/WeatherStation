const express = require('express');
const router = express.Router();
const client = require('../dbClient');
const co2 = require('../model/Co2');

router.get('/', async (req, res) => {
  try {
    const result = await co2.getCo2();
    res.status(200).send({ 'name': 'CO2 Gehalt', 'unit': 'ppm', 'dataArray': result })
  } catch (error) {
    res.status(500).json({ error });
  }
})


router.get('/:station', async(req, res) => {
  const { station } = req.params;
  try {
    const result = await co2.getCo2ByStation(station);
    res.status(200).json({'name':'CO2 Gehalt','unit':'ppm','dataArray':result})
  } catch (error) {
    res.status(500).json({ error });
  }
})

router.get('/:station/:functions', async(req, res) => {
  const { station, functions } = req.params;
  try {
    if (functions == 'mean') {
      const result = await co2.getCo2Mean(station);
      res.status(200).send({'name':'CO2 Gehalt','unit':'ppm','mean': result.map(me => me.mean)[0]})
    }
    else
    res.status(500).send('bad request: function not available')
  } catch (error) {
    res.status(500).json({error})
  }
});

module.exports = router;

// v0
// router.get('/', (req, res) => {
//   client.query(`select * from co2`)
//     .then(result => res.status(200).send({'name':'CO2 Gehalt','unit':'ppm','dataArray':result}))
//     .catch(error => res.status(500).send({ error }))
  
// });

// router.get('/:station', (req, res) => {
//   const { station } = req.params;
//   client.query(`select * from co2 where station = '${station}'`)
//     .then(result => res.status(200).send({'name':'CO2 Gehalt','unit':'ppm','dataArray':result}))
//     .catch(error => res.status(500).send({ error }))
// })