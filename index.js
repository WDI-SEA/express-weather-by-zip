// Require Needed Modules and define variables
const express = require('express')
const weather = require('weather-js')
const app = express()
const PORT = 8000

// GET for views, weather, and zipcode
app.get("/", (req, res) => {
    let zipcode = req.query.zipcode
    let display = ""

    weather.find({search: zipcode, degreeType: 'F'}, function(err, result) {
        if(err) {
            console.log(err)
        }
        display = JSON.stringify(result, null, 2)
        res.header("Content-Type", "application.json")
        res.send(`${display}`)
        console.log(JSON.stringify(result, null, 2))
    })    
})

app.get('/weather/zipcode', (req, res) => {
    let zipcode = req.params.zipcode
    let display = 
    weather.find({search: zipcode, degreeType: 'F'}, function(err, result) {
        if(err) {
            console.log(err)
        }
        display = JSON.stringify(result, null, 2)
        res.header("Content-Type", "application.json")
        res.send(`${display}`)
        console.log(JSON.stringify(result, null, 2))
    })    
})

// App port to listen on
app.listen(PORT)