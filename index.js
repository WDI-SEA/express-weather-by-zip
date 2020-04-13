var express = require('express')
var app = express()
var weather = require('weather-js')
var moment = require('moment')
app.locals.moment = moment;


app.set('view engine', 'ejs')
app.use(express.static('static'))


app.get('/', (req, res) => {
    console.log('homepage')
    res.render('home')
})

app.get('/weather', (req, res) => {
    //take the req.query.zip and pack it into a variable
    let zipcode = req.query.zip
    //run the zipcode thru weather-js, and expect a return
    weather.find({search: zipcode, degreeType: 'F'}, (err, result) => {
        if(err) {
            console.log(err)
        }
        res.render('result', {
            location: result[0].location.name,
            zip: result[0].location.zipcode,
            temp: result[0].current.temperature,
            img: result[0].current.imageUrl,
            feelslike: result[0].current.feelslike,
            day: result[0].current.day,
            skytext: result[0].current.skytext, 
            date: result[0].current.date,
            forecast: result[0].forecast
        })
    })
})

app.listen(3000, () => {
    
})

console.log(moment().subtract(10, 'days').calendar())