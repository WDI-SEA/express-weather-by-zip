const express = require('express')
const weather = require('weather-js')

const app = express()
const PORT = 8000

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/weather', (req,res) => {
    weather.find({search: req.query.zipcode, degreeType: 'F'}, (err,result) => {
        if(err) console.error(err)
        res.send(result)
    })
})

app.get('/weather/:zipcode', (req,res) => {
    weather.find({search: req.params.zipcode, degreeType: 'F'}, (err,result) => {
        if(err) console.error(err)
        res.send(result)
    })
})

app.listen(PORT, () => console.log(`listening in port:${PORT}`))