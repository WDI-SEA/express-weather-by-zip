const express = require('express')
const weatherApp = require('weather-js')
const app = express()
const PORT = 8000


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/weather', (req, res) => {
    const zip = req.query.weather
    console.log(zip)
    weatherApp.find({search: zip, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        res.send(`${JSON.stringify(result, null, 2)}`)
      })
})


app.get('/weather/:zipcode', (req,res) => {
    const zipCode = req.params.weather
    weatherApp.find({search: zipCode, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err)

        res.send(`${JSON.stringify(result, null, 2)}`)
      })
})

//PORT
app.listen(PORT, () => {
    console.log(`Port:${PORT} is working!`)
})