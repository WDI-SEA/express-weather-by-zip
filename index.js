const express = require("express")
const app = express()
const path = require('path')
var weather = require('weather-js')

// middleware to reference static html files
app.use(express.static(path.join(__dirname, 'views')))
// middleware for body parsers (not actually 100% necessary for this assignment)
app.use(express.urlencoded({ extended: true }))

// HOME ROUTE
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'))
})

// /weather GET route
app.get('/weather', (req, res) => {
    weather.find({search: req.query.zipcode, degreeType: 'F'}, function(err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
      })
})

// /weather/:zipcode GET route
app.get('/weather/:zipcode', (req, res) => {
    weather.find({search: req.params.zipcode, degreeType: 'F'}, function(err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
      })
})

// BONUS
app.get('/randomWeather', (req, res) => {
    let randRegion = Math.floor(Math.random() * 10) + "" // creates regional code and stringifies
    let randRest = Math.round(Math.random() * 10000) + "" // creates rest of zip code and stringifies
    let randZip = randRegion + randRest // concatenates the two
    
    res.redirect(`/weather/${randZip}`)
})

app.listen(8000)