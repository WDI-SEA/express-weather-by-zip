//require node modules
let express = require('express')
let weather = require('weather-js')
let moment = require('moment')
let shortDateFormat = 'MMM Do'

//declare express instance
let app = express()

//let app use moment and shortdate variables
app.locals.moment = moment
app.locals.shortDateFormat = shortDateFormat

//set ejs as templating language
app.set('view engine', 'ejs')

//
app.use(express.static('static'))

//declare some routes
app.get('/', (req,res) => {
    res.render('home')
})

app.get('/weather', (req,res) => {
    let zip = req.query.zip
    console.log(zip)
    weather.find({search: zip, degreeType: 'F'}, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.render('result', {
            location: result[0].location.name,
            zip: result[0].location.zipcode,
            temp: result[0].current.temperature,
            feelslike: result[0].current.feelslike,
            winddisplay: result[0].current.winddisplay,
            img: result[0].current.imageUrl,
            forecast: result[0].forecast
        })
        
    })
    
})

//setting port
app.listen(3000, () => {
    console.log('make it rain ☔️')
})