const express = require('express')
const path = require('path')
const app = express()
app.use('/public', express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(3000, function () {
    console.log('Listening on port 2003!')
})

app.listen(2003)
