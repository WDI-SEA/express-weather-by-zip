//import express
var express = require('express')
var bodyParser = require('body-parser')

// create an instance of express
var app = express();

var jsonParser = bodyParser.json()
 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')

var weather = require('weather-js')

app.get('/', (req, res) => {
  res.render('homepage')
})

app.post('/', urlencodedParser,(req, res) => {
  let zip = req.body.zipcode
  res.redirect(`/weather/${zip}`)
})

app.get('/weather/:zip', (req, res) => {
  let zipcode = req.params.zip
  weather.find({search: zipcode, degreeType: 'F'}, (err, result) => {
      if(err) {
          console.log(err)
      }
      res.render('weather', {
          location: result[0].location.name,
          zip: result[0].location.zipcode,
          temp: result[0].current.temperature,
          feelslike: result[0].current.feelslike,
          day: result[0].current.day,
          skytext: result[0].current.skytext, 
      })
  })
})

app.listen(3000, console.log("listening on port 3000 🎷🐍"));