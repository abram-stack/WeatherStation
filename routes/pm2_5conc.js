const express = require('express');
const router = express.Router();
const client = require('../dbClient');
const pm2_5conc = require('../model/Pm2_5conc');

router.get('/', async (req, res) => {
  try {
    const result = await pm2_5conc.getpm25Conc();
    res.status(200).send({ 'name': 'PM2.5 Massenkonzentration', 'unit': 'µg/m³', 'dataArray': result })
  } catch (error) {
    res.status(500).json({ error });
  }
})


router.get('/:station', async(req, res) => {
  const { station } = req.params;
  try {
    const result = await pm2_5conc.getpm25ConcByStation(station);
    res.status(200).json({'name':'PM2.5 Massenkonzentration','unit':'µg/m³','dataArray':result})
  } catch (error) {
    res.status(500).json({ error });
  }
})

router.get('/:station/:functions', async(req, res) => {
  const { station, functions } = req.params;
  try {
    if (functions == 'mean') {
      const result = await pm2_5conc.getpm25ConcMean(station);
      res.status(200).send({'name':'PM2.5 Massenkonzentration','unit':'µg/m³','mean': result.map(me => me.mean)[0]})
    }
    else
      res.status(500).send('bad request no functions');
  } catch (error) {
    res.status(500).json({error})
  }
});

module.exports = router;

// v0
//router.get('/', (req, res) => {
//   client.query(`select * from pm2_5conc`)
//   .then(result => res.status(200).send({'name':'PM2.5 Massenkonzentration','unit':'µg/m³','dataArray':result}))
//   .catch(error => res.status(500).send({error}))
// });

// // delete measurement
// // router.get('/delpm2', (req, res) => {
// //   client.dropMeasurement('pm2.5conc')
// //   .then(result => res.status(200).send('deleted'))
// //   .catch(error => res.status(500).send({error}))
// // });

// router.get('/:station', (req, res) => {
//   const { station } = req.params;
//   client.query(`select * from pm2_5conc where station = '${station}'`)
//     .then(result => res.status(200).send({'name':'PM2.5 Massenkonzentration','unit':'µg/m³','dataArray':result}))
//     .catch(error => res.status(500).send({ error }));
// });