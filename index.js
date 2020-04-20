let express = require('express')
let app = express() 
let weather = require('weather-js')

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.render('home') 
})

app.get('/weather', (req, res) => {
    //take the req.body.zip and pack it into a variable 
    //make sure the data is coming from the front end correctly "parse.json"
    //Run the zip thru the weather-js, and expect a r/n
    let zipcode = req.query.zip
    weather.find({search: zipcode, degreeType: 'F'}, (err, result) => {
        if(err){
            console.log(err)
        }
        res.render('weather', {location: result[0].location.name, 
                              zipcode: result[0].location.zipcode, 
                              temp: result[0].current.temperature
                            })
    })
}) 
app.listen(3000, () => {
    console.log('temp?')
})