const { text } = require('express');
const express = require('express')
const weather = require('weather-js');

const app = express()
const PORT = 3000;

app.get('/', (req, res) => {
    // console.log('hello')
    res.sendFile(__dirname + '/views/index.html')
}) 


app.get('/weather', (req, res) => {
    const zip = req.query.zipcode
    console.log(zip)
    weather.find({search: zip, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        res.send(`${JSON.stringify(result, null, 2)}`);
      });
})



app.get("/weather/:zipcode", function(req, res) {


    const zipurl = req.params.zipcode

    weather.find({search: zipurl, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        res.send(`${JSON.stringify(result, null, 2)}`);
        
      });

  });
  




app.listen(PORT)


