//get npm installs
let express = require('express');
let app = express();
let weather = require('weather-js')


//use static sheet grab with express
app.use(express.static('static'))
//use ejs
app.set('view engine', 'ejs')
//grab home page url
app.get('/', (req, res) => {
  res.render('home')
})

// grab weather info and display
app.get('/weather', (req, res) => {
  //take the req.body.zip and pack into a variable
  // make sure the data is coming from the front end correctls
  //run the zip through weather-js and expect return
  let zipcode = req.query.zip
  weather.find({search: zipcode, degreeType: 'F'}, (err, result) => {
    if(err){
      console.log(err)
    }
    let results = JSON.stringify(result, null, 2)
    console.log(results)
    //render searched results in this order 
    res.render('result', {location: result[0].location.name,
                          zipcode: result[0].location.zipcode,
                          temp: result[0].current.temperature,
                          tL: result[0].forecast[0].low,
                          tH: result[0].forecast[0].high,
                          Day: result[0].forecast[0].shortday,
                          Date: result[0].forecast[0].date,
                          Text: result[0].forecast[0].skytext,
                          Precip: result[0].forecast[0].precip,
                          twotL: result[0].forecast[1].low,
                          twotH: result[0].forecast[1].high,
                          twoDay: result[0].forecast[1].shortday,
                          twoDate: result[0].forecast[1].date,
                          twoText: result[0].forecast[1].skytextday,
                          threetL: result[0].forecast[2].low,
                          threetH: result[0].forecast[2].high,
                          threeDay: result[0].forecast[2].shortday,
                          threeDate: result[0].forecast[2].date,
                          threeText: result[0].forecast[2].skytextday,
                          fourL: result[0].forecast[3].low,
                          fourH: result[0].forecast[3].high,
                          fourDay: result[0].forecast[3].shortday,
                          fourDate: result[0].forecast[3].date,
                          fourText: result[0].forecast[3].skytextday,
                          fiveL: result[0].forecast[4].low,
                          fiveH: result[0].forecast[4].high,
                          fiveDay: result[0].forecast[4].shortday,
                          fiveDate: result[0].forecast[4].date,
                          fiveText: result[0].forecast[4].skytextday
    })
  })
})
//use static sheet
app.use(express.static('static'))
//set port
app.listen(3000, () => {
  console.log('listening and cruising')
});
