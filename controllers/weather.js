let router = require('express').Router()
let weather = require('weather-js')


// /current is reference to the URL 
router.get('/current', (req, res) => {
	//run the zip code through weather-js, and expect a return
	let zipcode = req.query.zip
	weather.find({search: zipcode, degreeType: 'F'}, (err, result) => {
		if (err) {
			console.log(err)
		}
		//This 'current' is the .ejs file
		res.render('current', {location: result[0].location.name,
		 zipcode: result[0].location.zipcode,
		 temp: result[0].current.temperature})	
	})

})

router.get('/forecast', (req, res) => {
	res.render('forecast')
})

module.exports = router