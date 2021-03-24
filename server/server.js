const express = require('express'),
      path = require('path')

require('dotenv').config()
const PORT = process.env.PORT || 80;

app = express()

var todoApi = require('./routes')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
const { prototype } = require('stream')

//define logger
const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
}
//middleware for parsing bodies from URL.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger)
app.use('/api', todoApi)
//specify port number
app.set('port', process.env.PORT || 8080);

//use the express.static built-in middleware function in Express.
app.use(express.static('server'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//app listening
var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});


//Mongodb connection with .env URI
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI, { useNewUrlParser: true }, () => {
});
module.exports = app
