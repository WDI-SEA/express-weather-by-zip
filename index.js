//require needed modules
let express = require('express')
let weather = require('weather-js')
let ejslayouts = require('express-ejs-layouts')

//declare new express app
let app = express()

//set template language
app.set('view engine', 'ejs')
app.use(express.static('static'))
app.use(ejslayouts)

app.get('/', (req, res) => {
	res.render('homepage')
})

//'weather' in URL references ./controller/weather.js
app.use('/weather', require('./controllers/weather'))

app.listen(3000)
