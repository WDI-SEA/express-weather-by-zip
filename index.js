const express = require("express")
const weather = require('weather-js')

const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get('/weather', (req,res) => {
    const zipCode = req.query.zip
    weather.find({search: zipCode, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err)
       
        res.send(JSON.stringify(result, null, 2))
      });
})

app.get('/weather/:zipcode', (req,res) => {
    const zipCode = req.params.zipcode
    weather.find({search: zipCode, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err)
       
        res.send(JSON.stringify(result, null, 2))
      });
})


app.listen(3000)