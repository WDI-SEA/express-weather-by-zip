const express = require('express')
const weatherJs = require('weather-js')
const weather = require('weather-js')

const app = express()
const weather = weatherJs()

            // Home Route:
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

            // Weather Page
            // grabs zipcode input from submit button
app.get('/weather', (req, res) => {
    weather.find({search: '', degreeType: 'F'}, 
    function(err, result) 
    { if(err) console.log(err);
       
        console.log(JSON.stringify(result, null, 2));
      });

	const currentWeather = weather(zipcode).param
	res.send(weatherJs)
})
            //use zipcode info in Weather-JS for data

            //execute data to client

            // weather/:zipcode route:
            
            app.get('/weather/:zipcode', (req, res) => {
                const zipcode = weather.find(zipcode.data)
                
                res.send(`${zipcode.data}`)
            })



app.listen(8000)