const express = require ('express')
const weather = require ('weather-js')

const app = express ()


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/weather', (req, res) => {
    weather.find({search: req.query.searchBar, degreeType: 'F'}, function(err,result) {
        if(err) console.log(err);
        let results = JSON.stringify(result, null, 2)
        console.log(JSON.stringify(result[0].location.name));
        res.send(results)
    })
    
})

app.get('weather/:zipcode', (req, res) => {
    weather.find({search: req.params.searchBar, degreeType: 'F'}, function(err,result) {
        if(err) console.log(err);
        let results = JSON.stringify(result, null, 2)
        console.log(JSON.stringify(result[0].location.name));
        res.send(results)
    })
    
})



app.listen(4000)
