const express = require('express')
const weather = require('weather-js')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/weather', (req, res) => {
    let zipcode = req.query.zipcode
    weather.find({search: zipcode, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);

        res.send(JSON.stringify(result, null, 2))
    })
})

app.get('/weather/:zipcode', (req, res) => {
    let zipcode = req.params.zipcode
    weather.find({search: zipcode, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);

        res.send(JSON.stringify(result, null, 2))
    })

})


app.listen(8000)
