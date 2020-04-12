// Create the express, app and weather
let express = require('express');
let app = express();
let weather = require('weather-js')
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
        var dates = []
        var icons = []
        result[0].forecast.forEach(day => {
            var date = day.date.split("-")
            switch (date[1]) {
                case '01': date[1] = "Jan"; break;
                case '02': date[1] = "Feb"; break;
                case '03': date[1] = 'Mar'; break;
                case '04': date[1] = 'Apr'; break;
                case '05': date[1] = 'May'; break;
                case '06': date[1] = 'Jun'; break;
                case '07': date[1] = 'Jul'; break;
                case '08': date[1] = 'Aug'; break;
                case '09': date[1] = 'Sep'; break;
                case '10': date[1] = 'Oct'; break;
                case '11': date[1] = 'Nov'; break;
                case '12': date[1] = 'Dec'; break;
                default: console.log("Houston, we have a problem");
            }
            dates.push(date)
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
        console.log(result[0].current)
        res.render('result', {
            result: result,
            dates: dates,
            icons: icons,
            location: result[0].location,
            today: result[0].forecast[1],
            tomorrow: result[0].forecast[2],
            dayAfter: result[0].forecast[3],
            lastDay: result[0].forecast[4],
        })
    })
})

app.listen(3000, () => {
    console.log("ALRIGHT LET'S DO THIS")
})