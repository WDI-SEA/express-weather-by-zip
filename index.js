const express = require('express')
const weather = require('weather-js')
const app = express()
const PORT = 8000


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/weather/:zipcode', (req, res) => {
    let weather = req.query.weather
    // let zip = req.params.zipcode
    res.send(weather)
})



app.listen(PORT, () => {
    console.log(`Port:${PORT} is working!`)
})


//weather app
// weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
    //     if(err) console.log(err);
    
    //     console.log(JSON.stringify(result, null, 2));
    
    //   });
    // app.get('/weather/:zip', (req, res) => {
        //     const zip = req.params.zip
        //     )
        //     res.send(`${x - y}`)
        // })