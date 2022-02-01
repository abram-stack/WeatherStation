const express = require('express');
const router = express.Router();

const client = require('../dbClient');

router.get('/', (req, res) => {
  client.query(`select * from pm2_5amountConc`)
  .then(result => res.status(200).send({'name':'PM2.5AmountConcentration','unit':'#/m3','dataArray':result}))
  .catch(error => res.status(500).send({error}))
});

// delete measurement
// router.get('/delpm2', (req, res) => {
//   client.dropMeasurement('pm2.5conc')
//   .then(result => res.status(200).send('deleted'))
//   .catch(error => res.status(500).send({error}))
// });

router.get('/:station', (req, res) => {
  const { station } = req.params;
  client.query(`select * from pm2_5amountConc where station = '${station}'`)
    .then(result => res.status(200).send({'name':'PM2.5AmountConcentration','unit':'#/m3','dataArray':result}))
    .catch(error => res.status(500).send({ error }));
});

router.get('/:station/:functions', async(req, res) => {
  const { station, functions } = req.params;
  try {
    if (functions == 'mean') {
      const result = await client.query(`select mean(data) from pm2_5amountConc where station = '${station}'`);
      res.status(200).send({'name':'PM2.5AmountConcentration','unit':'#/m3','dataArray':result})
    }
    else
      res.status(500).send('bad request no functions');
  } catch (error) {
    res.status(500).json({error})
  }
});

module.exports = router;