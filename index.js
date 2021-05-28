const express = require("express")
const dayjs = require('dayjs')
const weather = require("weather-js")
const app = express()
const PORT = 9001

const log = console.log

// HOME PAGE
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// SUBMIT PAGE
app.get("/weather/", (req, res) => {
    let zipcode = req.query.zipcode

        weather.find({search: zipcode, degreeType: "F"}, function (err, result) {
        if(err) log(err)

            let city = result[0].location.name
            let currentTemp = result[0].current.temperature
            let currentDate = dayjs(result[0].current.date)
            let skyText = result[0].current.skytext
            let windDisplay = result[0].current.winddisplay

            const dateFormat = 'dddd, MMMM D[,] YYYY'

    res.writeHead(200, {"Content-Type": "text/html"})
    res.write("<!DOCTYPE html>")
    res.write("<html>")
    res.write("<head>")
    res.write("<style>")
    res.write("* {text-align: center; font-family: Arial, Helvetica, sans-serif}")
    res.write("h3 {margin-top: 200px}")
    res.write("h1 {font-size: 40px}")
    res.write("</style>")
    res.write("<title>")
    res.write("Local Weather Data")
    res.write("</title>")
    res.write("</head>")
    res.write("<body>")
    res.write(`<h3>${city}</h3>`)
    res.write(`<p>${skyText}</p>`)
    res.write(`<h1>${currentTemp} F</h1>`)
    res.write(`<p>${currentDate.format(dateFormat)}</p>`)
    res.write(`<p>Wind: ${windDisplay}</p>`)
    res.write("</body>")
    res.write("</html>")
    res.end()
    })
})

// URL PARAM PAGE
app.get("/weather/:zipcode", (req, res) => {
    let zipcode = req.params.zipcode

        weather.find({search: zipcode, degreeType: "F"}, function (err, result) {
        if(err) log(err)

        let city = result[0].location.name
        let currentTemp = result[0].current.temperature
        let currentDate = dayjs(result[0].current.date)
        let skyText = result[0].current.skytext
        let windDisplay = result[0].current.winddisplay

        const dateFormat = 'dddd, MMMM D[,] YYYY'

    res.writeHead(200, {"Content-Type": "text/html"})
    res.write("<!DOCTYPE html>")
    res.write("<html>")
    res.write("<head>")
    res.write("<style>")
    res.write("* {text-align: center; font-family: Arial, Helvetica, sans-serif}")
    res.write("h3 {margin-top: 200px}")
    res.write("h1 {font-size: 40px}")
    res.write("</style>")
    res.write("<title>")
    res.write("Local Weather Data")
    res.write("</title>")
    res.write("</head>")
    res.write("<body>")
    res.write(`<h3>${city}</h3>`)
    res.write(`<p>${skyText}</p>`)
    res.write(`<h1>${currentTemp} F</h1>`)
    res.write(`<p>${currentDate.format(dateFormat)}</p>`)
    res.write(`<p>Wind: ${windDisplay}</p>`)
    res.write("</body>")
    res.write("</html>")
    res.end()
    })
})

app.listen(PORT, () => {
    log(`The port level! IT'S OVER 9000!!`)
})