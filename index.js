//import express
var express = require('express')

// create an instance of express
var app = express();

app.set('view engine', 'ejs')

var weather = require('weather-js')

app.get('/', function(req, res){
    res.render('homepage.ejs')
})

app.post('/', function(req, res){
    weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
       
        console.log(JSON.stringify(result, null, 2));
      });
    res.render('weather.ejs')
    console.log("hello");
})


app.get('/weather', function(req, res){
    res.render('weather.ejs')
})

// let app know which port to listen on
app.listen(8000);