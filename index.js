// Require Needed Modules and define variables
const express = require('express')
const weather = require('weather-js')
const app = express()
const PORT = 8000

// GET for views
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

// GET for weather
app.get('/weather', (req, res) => {
    weather.find({search: req.query.zipcode, degreeType: 'F'}, (err, result) => {
        if(err) {
            console.log(err)
        }
        res.send(result)
    })
})

// GET for weather in zipcode
app.get('/weather/:zipcode', (req, res) => {
    weather.find({search: req.params.zipcode, degreeType: 'F'}, (err, result) => {
        if(err) {
            console.log(err)
        }
        res.send(result)
    })
})

// GET for random weather
app.get('/random', (req, res) => {
    res.redirect(`/weather/${Math.ceil(Math.random()*100000)}`)
})

// App port to listen on
app.listen(PORT)