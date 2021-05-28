const express = require('express')
const weather = require('weather-js')
const app = express()
const PORT = 8000

app.get('/weather', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(PORT, () => {
    console.log(`Port:${PORT} is working!`)
})