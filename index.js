const express = require('express')
const weather = require('weather-js')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html')
})

app.get('/weather', (req, res) => {
    console.log(req.query)
    const zip = req.query.zip

    weatherNow(zip, res)
})

app.get('/weather/:zipcode', (req, res) => {
    const zip = req.params.zipcode

    weatherNow(zip, res)
})

app.listen(8000)

function weatherNow(zip, res) {  
    weather.find({search: zip, degreeType: 'F'}, (err, result) => {
        if(err) console.log(err)
    
        res.send(JSON.stringify(result))
    })
}