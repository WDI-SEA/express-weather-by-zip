const express = require('express')
const app = express()
let weather = require('weather-js')
const PORT = 33030

app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html', "Zipcode Receiver")
})

app.get('/weather', (req, res) => {
    weather.find({search: req.query.zipcode, degreeType: 'F'}, function(err, result) {
        if (err)  {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/weather/:zipcode', (req, res) => {
    weather.find ({search :req.params.zipcode, degreeType: "F"}, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

// bonus
app.get('/randomWeather', (req, res) => {
    let randRegion = Math.floor(Math.random() * 10) + ""
    let randRest = Math.round(Math.random() * 10000) + ""
    let randZip = randRegion + randRest

    res.redirect(`/weather/${randZip}`)
})

app.listen(PORT, () => {
    console.log(`welcome to ${PORT}`)
  })