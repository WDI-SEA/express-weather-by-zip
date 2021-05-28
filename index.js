const express = require("express")
const weather = require("weather-js")
const app = express()
const PORT = 9001

const log = console.log

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/weather", (req, res) => {
    let zipcode = req.query.zipcode

        weather.find({search: zipcode, degreeType: "F"}, function (err, result) {
        if(err) log(err)

        let city = result[0].location.name
        let currentTemp = result[0].current.temperature
        let skyText = result[0].current.skytext
        let currentDate = result[0].current.date
        let windDisplay = result[0].current.winddisplay
        
        res.send(result)
        log(result[0].current.winddisplay)
        // const formatWeather = ([results]) => {
        //     res.send()
        // }

        // log(JSON.stringify(result, null, 2).location)
    })
})

app.listen(PORT, () => {
    log(`The port level! IT'S OVER 9000!!`)
})

// weather.find({search: "78741", degreeType: "F"}, function (err, result) {
//     if(err) log(err)
    
//     log(JSON.stringify(result, null, 2))
// })

// http://localhost:9001/weather?zipcode=78724