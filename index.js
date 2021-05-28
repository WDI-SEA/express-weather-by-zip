const express = require('express')
const weather = require('weather-js');


const app = express()
const PORT = 8000

//create a home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

//weather
app.get('/weather', (req, res) => {
  const zip = req.query.zip
  weather.find({search: zip, degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);
  res.send(JSON.stringify(result, null, 2));
  })
})


// weather zip
app.get('/weather/:zipcode:', (req, res) => {
  const zip = req.params.zipcode
  weather.find({search: zip, degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);
  res.send(JSON.stringify(result, null, 2));
  })
})



//listen on a port
app.listen(PORT, () => {
  console.log(`you are listening to the smooth sounds of port ${PORT}` )
})