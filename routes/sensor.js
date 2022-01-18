const express = require('express');
const router = express.Router();
const client = require('../dbClient');

router.get('/', (req, res) => {
  client.query(`select * from sensors`)
    .then(result => res.status(200).send(result))
  .catch(error => res.status(500).json({error}))
})

module.exports = router;