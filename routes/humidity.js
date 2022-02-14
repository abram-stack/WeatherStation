const express = require('express');
const router = express.Router();
const client = require('../dbClient');
const humidity = require('../model/Humidity');


router.get('/', async (req, res) => {
  try {
    const result = await humidity.getHumidity();
    res.status(200).send({ 'name': 'Feuchtigkeit', 'unit': '%H', 'dataArray': result })
  } catch (error) {
    res.status(500).json({ error });
  }
})

router.get('/:station', async(req, res) => {
  const { station } = req.params;
  try {
    const result = await humidity.getHumidityByStation(station);
    res.status(200).json({'name':'Feuchtigkeit','unit':'%H','dataArray':result})
  } catch (error) {
    res.status(500).json({ error });
  }
})

router.get('/:station/:functions', async(req, res) => {
  const { station, functions } = req.params;
  try {
    if (functions == 'mean') {
      const result = await humidity.getHumidityMean(station);
      res.status(200).send({'name':'Feuchtigkeit','unit':'%H','mean': result.map(me => me.mean)[0]})
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
//   client.query(`select * from humidity`)
//   .then(result => res.status(200).send({'name':'Feuchtigkeit','unit':'%','dataArray':result}))
//   .catch(error => res.status(500).send({error}))
// });

// router.get('/:station', (req, res) => {
//   const { station } = req.params;
//   client.query(`select * from humidity where station = '${station}'`)
//     .then(result => res.status(200).send({'name':'Feuchtigkeit','unit':'%','dataArray':result}))
//     .catch(error => res.status(500).send({ error }));
// });