let express = require('express')
let app = express()
let weather = require('weather-js')

app.set('view engine', 'ejs')
app.use(express.static('static'))
app.get('/', (req, res) => {
    res.render('home')
})


var getBackgroundImageAccordingToWeather = (text) => {
	switch(text) {
		case("Sunny"): 
            return "http://media.giphy.com/media/dMGvcduPkahSo/giphy.gif";
        case("Mostly Sunny"): 
            return "http://media.giphy.com/media/l0Iy2WkvqrP8DrKyQ/giphy.gif";
        case("Snow"): 
            return "https://media.giphy.com/media/3o6ZsUJ0Ry3ahJF16w/giphy.gif";
        case("Light Rain and Snow"): 
            return "http://media.giphy.com/media/l0Iyjj36l3vv0MwUg/giphy.gif";
        case("Rain Showers"): 
			return "http://media.giphy.com/media/3Fi5jZkZdJA4M/giphy.gif";
		case("Partly Sunny"):
            return "https://media.giphy.com/media/1FXYMTuKX91hS/giphy.gif";
        case("Clear"):
            return "http://media.giphy.com/media/h5AHEcNMhn7u8/giphy.gif";
        case("Cloudy"):
            return "http://media.giphy.com/media/3oz8xGArBL0mUbEHuw/giphy.gif";
        case("Mostly Cloudy"): 
            return "http://media.giphy.com/media/bZqWbS0aFNuYU/giphy.gif";
        case("Sunny"): 
			return "http://media.giphy.com/media/dMGvcduPkahSo/giphy.gif";
		default:
            return "http://media.giphy.com/media/B4OVvY3CVNN0Q/giphy.gif";
    }
}
// if it's a random value like "tornado" it'll default here


app.get('/forecast', (req, res) => {
    // Run the zip code through weather-js, and expect a return
    let zipcode = req.query.zip
    weather.find({search: zipcode, degreeType: 'F'}, (err, result) => {
        if(err) {
            console.log(err)
        }
        
        console.log(result[0].forecast)
        res.render('forecast', {  forecast: result[0].forecast,
                                    location: result[0].location.name,
                                    backgroundImage: getBackgroundImageAccordingToWeather,
        })
                            })
   
})
app.get('/weather', (req, res) => {
    // Run the zip code through weather-js, and expect a return
    let zipcode = req.query.zip
    weather.find({search: zipcode, degreeType: 'F'}, (err, result) => {
        if(err) {
            console.log(err)
        }
        
        console.log(result[0].weather)
        res.render('result', {  location: result[0].location.name,
                                zipcode: result[0].location.zipcode,
                                   temp: result[0].current.temperature
                            })
    })
})

app.listen(3000, () => {
    console.log('Listening and cruising on port 3000')
})

{/* <img src="<%= getBackgroundImageAccordingToWeather(skytextday) %>' /> */}