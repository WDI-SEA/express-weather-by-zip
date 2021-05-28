// requires modules
const express = require('express')
const weather = require('weather-js')

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/weather', (req, res) => {
    let zipcode = req.query.zipcode
    let display = ""
    weather.find({search: zipcode, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err)
        
        display = JSON.stringify(result, null, 2)
        res.header("Content-Type",'application/json')
        res.send(`${display}`)
        console.log(JSON.stringify(result, null, 2))
    })
})

app.get('/weather/:zipcode', (req, res) => {
    let zipcode = req.params.zipcode
    let display = ""
    weather.find({search: zipcode, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err)
        
        display = JSON.stringify(result, null, 2)
        res.header("Content-Type",'application/json')
        res.send(`${display}`)
        console.log(JSON.stringify(result, null, 2))
    })
})

app.listen(PORT)