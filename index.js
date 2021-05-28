const express = require('express')
const weather = require('weather-js')

const app = express()
const PORT = 5901

app.get ('/', (req, res) => {
    res.sendFile(__dirname+'/views/zip.html')
})

app.get('/weather', (req, res) => {
    const zip = req.query.zip
    weather.find({search: `${zip}`, degreeType: 'F'}, function(err, result) {
    if(err) console.log(err)
    console.log(JSON.stringify(result, null, 2))
    res.send(result)
  })
})

//another get route for random zip generator
//   app.get('/randomzip/*', (req, res) => {
//     const rZip = req.query.ranzip
//     weather.find({search: `${rZip}`, degreeType: 'F'}, function(err, result) {
//     if(err) console.log(err)
//     console.log(JSON.stringify(result, null, 2))
//     res.send(result)
//   })
// })

app.listen(PORT)