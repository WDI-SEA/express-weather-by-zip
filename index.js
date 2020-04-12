//basic definitions
let express = require('express')
let layouts = require('express-ejs-layouts')
let app = express()
let weather = require('weather-js');
app.set('view engine', 'ejs')
app.use(express.static('static'))
app.use(layouts)


//routes//

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/search', (req, res) => {
    let city = req.query.query
    console.log(city)
    let weatherNow = weather.find({search: city, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
       
        console.log(JSON.stringify(result, null, 2));
        res.render('weather', { weatherNow: result})
      });
})

app.listen(3000)