// Create the express, app and weather
let express = require('express');
let app = express();
let weather = require('weather-js');
let moment = require('moment');
// Use ejs and layout
var ejsLayouts = require('express-ejs-layouts')
app.use(ejsLayouts)
app.set('view engine', 'ejs')
// Use the style sheet
app.use(express.static('static'))
app.use(express.urlencoded({extended: false}));

// The main page
app.get('/', (req,res) => {
    res.render('home')
})
// 
app.get('/weather', (req,res) => {
    let zipcode = req.query.zip
    weather.find({search: zipcode, degreeType: 'F'}, (err, result) => {
        // Just some basic stuff
        if(err) {console.log(err)}
        // Properly display the date
        var icons = []
        result[0].forecast.forEach(day => {
            // Add the icons that will be displayed
            var weather = day.skytextday;
            if (weather === "Sunny") {icons.push("☀️")}
            else if (weather==="Partly Sunny"||weather==="Mostly Cloudy") {icons.push("🌥")}
            else if (weather==="Partly Cloudy"||weather==="Mostly Sunny") {icons.push("🌤")}
            else if (weather === "Cloudy") {icons.push("☁️")}
            else {icons.push("🌟")}
        })
        // Display: High/Low, Day, Date, Description, % Precipitation
            // .name, .zipcode
            // .high, .low, .day, .date, .skycodeday, .precip
        console.log(result)
        res.render('result', {
            moment: moment,
            icons: icons,
            result: result,
            forecast: result[0].forecast,
            location: result[0].location,
        })
    })
})

app.listen(3000, () => {
    console.log("ALRIGHT LET'S DO THIS")
})