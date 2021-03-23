const express = require('express'),
      path = require('path')

require('dotenv').config()

app = express()

var todoApi = require('./routes')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger)
app.use('/api', todoApi)


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI, { useNewUrlParser: true }, () => {
app.listen(4000, () => console.log("Server Up and running"));
});
module.exports = app
