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
	weather.find({search: zipcode, degreeType: 'F'}, (err, result) => {
		if(err) {
			console.log(err)
		}

		res.render('results', {location: result[0].location.name, 
							   zipcode: result[0].location.zipcode,
							   temp: result[0].current.temperature
							})
	})

})

// Pick a port for it to listen on
app.listen(3000, () => {
	console.log('Ready to rock!')
})