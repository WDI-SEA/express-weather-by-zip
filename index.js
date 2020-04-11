// Require needed modules
let express = require('express')
let app = express()
let weather = require('weather-js')

app.set('view engine', 'ejs')
app.use(express.static('static'))


// Declare routes
app.get('/', (req, res) => {
	res.render('home')
})

app.get('/weather', (req, res) => {
	
	// Make sure data is coming from front end correctly

	// Run the zip code through the weather-js 
	let zipcode = req.query.zip
	weather.find({ search: zipcode, degreeType: 'F' }, (err, result) => {
		if(err) {
			console.log(err)
		}

		res.render('results', { location: result[0].location.name, 
							    zipcode: result[0].location.zipcode,
							    temp: result[0].current.temperature,
							    day1L: result[0].forecast[0].low,
							    day1H: result[0].forecast[0].high,
							    day1Day: result[0].forecast[0].shortday,
							    day1Date: result[0].forecast[0].date,
							    day1Text: result[0].forecast[0].skytextday,
							    day1Precip: result[0].forecast[0].precip,
							    day2L: result[0].forecast[1].low,
							    day2H: result[0].forecast[1].high,
							    day2Day: result[0].forecast[1].shortday,
							    day2Date: result[0].forecast[1].date,
							    day2Text: result[0].forecast[1].skytextday,
							    day2Precip: result[0].forecast[1].precip,
							    day3L: result[0].forecast[2].low,
							    day3H: result[0].forecast[2].high,
							    day3Day: result[0].forecast[2].shortday,
							    day3Date: result[0].forecast[2].date,
							    day3Text: result[0].forecast[2].skytextday,
							    day3Precip: result[0].forecast[2].precip,
							    day4L: result[0].forecast[3].low,
							    day4H: result[0].forecast[3].high,
							    day4Day: result[0].forecast[3].shortday,
							    day4Date: result[0].forecast[3].date,
							    day4Text: result[0].forecast[3].skytextday,
							    day4Precip: result[0].forecast[3].precip,
							    day5L: result[0].forecast[4].low,
							    day5H: result[0].forecast[4].high,
							    day5Day: result[0].forecast[4].shortday,
							    day5Date: result[0].forecast[4].date,
							    day5Text: result[0].forecast[4].skytextday,
							    day5Precip: result[0].forecast[4].precip,
							     })
							
	})

})

// Pick a port for it to listen on
app.listen(3000, () => {
	console.log('Ready to rock!')
})