let express = require('express')
let app = express()
let weather = require('weather-js')

app.set('view engine', 'ejs')
app.use(express.static('static'))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/weather', (req, res) => {
  // run the zip code through weather-js and take return
    let zipCode = req.query.zip
    weather.find({search: zipCode, degreeType: 'F'}, (err, result) => {
        if(err) {
            console.log(err);
        }
  
        res.render('result', { location: result[0].location.name, 
                                zipcode: result[0].location.zipcode,
                                temp: result[0].current.temperature,
                                hightemp1: result[0].forecast[0].high,
                                lowtemp1: result[0].forecast[0].low,
                                dotw1: result[0].forecast[0].day,
                                date1: result[0].forecast[0].date,
                                desc1: result[0].forecast[0].skytextday,
                                pcop1: result[0].forecast[0].precip,
                                hightemp2: result[0].forecast[1].high,
                                lowtemp2: result[0].forecast[1].low,
                                dotw2: result[0].forecast[1].day,
                                date2: result[0].forecast[1].date,
                                desc2: result[0].forecast[1].skytextday,
                                pcop2: result[0].forecast[1].precip,
                                hightemp3: result[0].forecast[2].high,
                                lowtemp3: result[0].forecast[2].low,
                                dotw3: result[0].forecast[2].day,
                                date3: result[0].forecast[2].date,
                                desc3: result[0].forecast[2].skytextday,
                                pcop3: result[0].forecast[2].precip,
                                hightemp4: result[0].forecast[3].high,
                                lowtemp4: result[0].forecast[3].low,
                                dotw4: result[0].forecast[3].day,
                                date4: result[0].forecast[3].date,
                                desc4: result[0].forecast[3].skytextday,
                                pcop4: result[0].forecast[3].precip,
                                hightemp5: result[0].forecast[4].high,
                                lowtemp5: result[0].forecast[4].low,
                                dotw5: result[0].forecast[4].day,
                                date5: result[0].forecast[4].date,
                                desc5: result[0].forecast[4].skytextday,
                                pcop5: result[0].forecast[4].precip,
                                
        })
    })
    
})

app.listen(8000, () => {
    console.log("works")
})