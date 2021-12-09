const express = require('express');
const Influx = require('influx');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello from server');
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`running on server ${port}...`)
});