let express = require('express')
let app = express()
let weather = require('weather-js')

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/weather', (req, res) => {
    // Run the zip code through weather-js, and expect a return
    let zipcode = req.query.zip
    weather.find({search: zipcode, degreeType: 'F'}, (err, result) => {
        if(err) {
            console.log(err)
        }
        res.render('result', {  location: result[0].location.name,
                                zipcode: result[0].location.zipcode,
                                temp: result[0].current.temperature
                            })
    })
})
app.listen(8000, () => {
    console.log('Listening and cruising on port 8000')
})