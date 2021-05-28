const express = require('express')
const weatherJs = require('weather-js')

const app = express()
const   = weatherJs()

            // Home Route:
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

            // Weather Page
            // grabs zipcode input from submit button

            //use zipcode info in Weather-JS for data

            //execute data to client

            // weather/:zipcode route:
            
            //grab zipcode from Url.



app.listen(8000)