const express = require('express'),
      path = require('path')

require('dotenv').config()
const PORT = process.env.PORT || 80;

app = express()

var todoApi = require('./routes')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
const { prototype } = require('stream')

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

app.use(express.static(path.join(__dirname, 'build')));
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});



mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI, { useNewUrlParser: true }, () => {
});
module.exports = app
