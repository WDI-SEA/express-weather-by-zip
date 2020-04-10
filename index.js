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
        let results = JSON.stringify(result, null, 2)
        console.log(results)
        res.render('result', {
            location: result[0].location.name,
            zipcode: result[0].location.zipcode,
            temp: result[0].current.temperature,
            feelsLike: result[0].current.feelslike
        })
    })
    
})

app.listen(3000, () => {
    console.log('heller')
})