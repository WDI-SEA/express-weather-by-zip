const express = require('express')
const weather = require('weather-js')

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

//

app.get('/weather', (req,res) =>{
    weather.find({search: req.query.zip, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        let results = JSON.stringify(result[0], null, 2)
        console.log(JSON.stringify(result[0], null, 2));
        res.send(results)
      });
})




app.get('/weather/:zipcode', (req, res) => {
    console.log(req.params.zipcode)
    weather.find({search: req.params.zipcode, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        let results = JSON.stringify(result, null, 2)
        // console.log(JSON.stringify(result, null, 2));
        res.send(results)
    
})
})



app.listen(PORT), () => {
   console.log(`listening to the smooth sounds of port ${PORT} in the morning 🌊`)
} 