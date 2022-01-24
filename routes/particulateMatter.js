const express = require('express');
const router = express.Router();

const client = require('../dbClient');

router.get('/', (req, res) => {
  client.query(`select * from particulateMatter`)
  .then(result => res.status(200).send(result))
  .catch(error => res.status(500).send({error}))
});

router.get('/:station', (req, res) => {
  const { station } = req.params;
  client.query(`select * from particulateMatter where station = '${station}'`)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send({ error }));
});

router.get('/:station/:functions', async(req, res) => {
  const { station, functions } = req.params;
  try {
    if (functions == 'mean') {
      const result = await client.query(`select mean(data) from particulateMatter where station = '${station}'`);
      res.status(200).send(result)
    }
    else
      res.status(500).send('bad request no functions');
  } catch (error) {
    res.status(500).json({error})
  }
});

module.exports = router;