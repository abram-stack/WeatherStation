const express = require('express');
const router = express.Router();
const client = require('../dbClient');
const brightness = require('../model/Brightness');

router.get('/', async (req, res) => {
  try {
    const result = await brightness.getBrightness();
    res.status(200).send({ 'name': 'Helligkeit', 'unit': '%', 'dataArray': result })
  } catch (error) {
    res.status(500).json({ error });
  }
})


router.get('/:station', async(req, res) => {
  const { station } = req.params;
  try {
    const result = await brightness.getBrightnessByStation(station);
    res.status(200).json({'name':'Helligkeit','unit':'%','dataArray':result})
  } catch (error) {
    res.status(500).json({ error });
  }
})

router.get('/:station/:functions', async(req, res) => {
  const { station, functions } = req.params;
  try {
    if (functions == 'mean') {
      const result = await brightness.getBrightnessMean(station);
      res.status(200).send({'name':'Helligkeit','unit':'%','mean': result.map(me => me.mean)[0]})
    }
    else
    res.status(500).send('bad request: function not available')
  } catch (error) {
    res.status(500).json({error})
  }
});
module.exports = router;
//v0
// router.get('/', (req, res) => {
//   client.query(`select * from brightness`)
//     .then(result => res.status(200).send({ 'name': 'Helligkeit', 'unit': '%', 'dataArray': result }))
//     .catch(error => res.status(500).send({ error }))
  
// });

// router.get('/:station', (req, res) => {
//   const { station } = req.params;
//   client.query(`select * from brightness where station = '${station}'`)
//     .then(result => res.status(200).send({ 'name': 'Helligkeit', 'unit': '%', 'dataArray': result }))
//     .catch(error => res.status(500).send({ error }))
// })