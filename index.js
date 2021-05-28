const express = require('express')
const weatherJs = require('weather-js')
var weather = require('weather-js')
const app = express()
const path = require('path')

            // Home Route:
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

            // Weather Page
            // grabs zipcode input from submit button
app.get('/weather', (req, res) => {
    weather.find({search: req.query.zipcode, degreeType: 'F'}, function(err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
    }
}  }
}
   
            //use zipcode info in Weather-JS for data

            //execute data to client

            // weather/:zipcode route:
            
app.get('/weather/:zipcode', (req, res) => {
    weather.find({search: req.params.zipcode, degreeType: 'F'}, function(err, result) {
         if (err) {
             res.send(err)
         } else {
            res.send(result)
         }
    })
 })
            


app.listen(8000)