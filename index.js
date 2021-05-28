// OBJECTIVES
// HTML doc form for zipcode submission
    // triggers /weather GET rout
        // /weather uses weather-js to find weather data and sends to client
// /weather/:zipcode does all above

const express = require('express')
const weather = require('weather-js')

// app setup
const app = express()

// GET -- setup home route, link and send html form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

// /WEATHER -- setup weather rout, take user input from form, input user input into weather-js, send results to client
app.get('/weather', (req, res) => {
    let userZip = (req.query.zipcode)
    weather.find({search: userZip, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err)
        res.header(`Content-Type`, `application/json`) // for pretty format
        res.send(JSON.stringify(result, null, 2))
    });
})

// /WEATHER/:ZIPCODE -- same as above but with zipcode params which is entered directly into the URL by user
app.get('/weather/:zipcode', (req, res) => {
    let userZip = (req.params.zipcode)
    weather.find({search: userZip, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        res.header(`Content-Type`, `application/json`) // for pretty format
        res.send(JSON.stringify(result, null, 2));
    });
})

app.listen(8000)
