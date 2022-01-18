const express = require('express');
const router = express.Router();
const client = require('../dbClient');

router.get('/', (req, res) => {
  client.query(`select * from stations`)
    .then(result => res.status(200).send(result))
    .catch(error => re.status(500).json({ error }))
});

module.exports = router;