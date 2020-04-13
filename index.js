let express = require('express')
let app = express()
let weather = require('weather-js')

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.render('home',{message: ''})
})

app.get('/weather', (req, res) => {
    // Run the zip code through weather-js, and expect a return
    let zipcode = req.query.zip
    weather.find({search: zipcode, degreeType: 'F'}, (err, result) => {
       
        if(err) {
            console.log('error',err)        
        }
        else if(Object.keys(result).length != 0){
            console.log("rest not empty",result)
            res.render('results', {  location: result[0].location.name,
                                    zipcode: result[0].location.zipcode,
                                    current: result[0].current,
                                    forecast: result[0].forecast.slice(1,5)
                                }) 
        }
        else{
             res.render('home',{message: 'Not a valid zipcode!'})
        }
    })
})



app.listen(8000, () => {
    console.log('Listening and cruising on port 8000')
})