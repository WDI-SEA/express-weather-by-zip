let weather = require('weather-js');
let express = require('express');


let app = express();

app.use(express.static('static'))
 
// Options:
// search:     location name or zipcode
// degreeType: F or C

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
	res.render('home')
})


app.get('/weather', (req,res) => {
	//take input and put into varible
	let zipcode = req.query.zip
	//run zipcode through weather-js
	weather.find({search: zipcode, degreeType: 'F'}, function(err, result) {
		if(err) {
			console.log(err);
		}
		let results = (JSON.stringify(result, null, 2))

		// res.render('result', {location: result[0].location.name, 
		// 	zipcode: result[0].location.zipcode,
		// 	temp: result[0].current.temperature
		// })
		console.log(result[0].forecast[0],result[0].forecast[1],result[0].forecast[2],result[0].forecast[3]);
		
			res.render('result', {forecastlow0: result[0].forecast[0].low,
			forecasthigh0: result[0].forecast[0].high,
			forecastday0: result[0].forecast[0].day,
			forecastdate0: result[0].forecast[0].date,
			forecastdes0: result[0].forecast[0].skytextday,
			forecastlow1: result[0].forecast[1].low,
			forecasthigh1: result[0].forecast[1].high,
			forecastday1: result[0].forecast[1].day,
			forecastdate1: result[0].forecast[1].date,
			forecastdes1: result[0].forecast[1].skytextday,
			forecastlow2: result[0].forecast[2].low,
			forecasthigh2: result[0].forecast[2].high,
			forecastday2: result[0].forecast[2].day,
			forecastdate2: result[0].forecast[2].date,
			forecastdes2: result[0].forecast[2].skytextday,
			forecastlow3: result[0].forecast[3].low,
			forecasthigh3: result[0].forecast[3].high,
			forecastday3: result[0].forecast[3].day,
			forecastdate3: result[0].forecast[3].date,
			forecastdes3: result[0].forecast[3].skytextday,
			forecastlow4: result[0].forecast[4].low,
			forecasthigh4: result[0].forecast[4].high,
			forecastday4: result[0].forecast[4].day,
			forecastdate4: result[0].forecast[4].date,
			forecastdes4: result[0].forecast[4].skytextday
		})
		

		
		
	})	
	
})


 
// weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
//   if(err) console.log(err);
 
//   console.log(JSON.stringify(result, null, 2));
// });

//old results ejs
// <h1><%= location %> </h1>
// 	<h2><%= zipcode %> </h2>
// 	<h3><%= temp %> </h3>


app.listen(3000, () => {
	console.log('Ready to rock and roll 🙃')
})