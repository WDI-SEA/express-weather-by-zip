var express = require('express')
var app = express()
var weather = require('weather-js')

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
        // console.log(result)
        res.render('result', {
            location: result[0].location.name,
            zip: result[0].location.zipcode,
            temp: result[0].current.temperature,
            img: result[0].current.imageUrl,
            feelslike: result[0].current.feelslike,
            day: result[0].current.day,
            skytext: result[0].current.skytext, 
            date: result[0].current.date,
            dayOneDay: result[0].forecast[0].day,
            dayOneDate: result[0].forecast[0].date,
            dayOneLow: result[0].forecast[0].low,
            dayOneHigh: result[0].forecast[0].high,
            dayOneTextDay: result[0].forecast[0].skytextday,
            dayTwoDay: result[0].forecast[1].day, 
            dayTwoDate: result[0].forecast[1].date,
            dayTwoLow: result[0].forecast[1].low,
            dayTwoHigh: result[0].forecast[1].high,
            dayTwoTextDay: result[0].forecast[0].skytextday,
            dayThreeTextDay: result[0].forecast[1].skytextday,
            dayThreeDay: result[0].forecast[2].day, 
            dayThreeDate: result[0].forecast[2].date,
            dayThreeLow: result[0].forecast[2].low,
            dayThreeHigh: result[0].forecast[2].high,
            dayThreeTextDay: result[0].forecast[2].skytextday
        })
    })
})

app.listen(3000, () => {
    
})