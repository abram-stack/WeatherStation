# WeatherStation

NodeJ Backend Weather Station API.
We use InfluxDB as the database. InfluxDB is a Timeseries Database where time is everything, for more information check out the influxdata. 
https://docs.influxdata.com/influxdb/v1.8/concepts/key_concepts/ 


Here i am using InfluxDB version 1.8 and InfluxQL for query the data from the database.
All the data are being stored in the local storage. Running by default on localhost PORT 8086

Create project
NPM init 

Install influxAPi client library
npm install influx


In this project the main purpose is :
a) to serve the client from the frontend the data that are stored in the database.
b) we use some dummy data in database. To write some dummy data, i created a function that write the Javascript Object to the database
