const express = require('express'),
      path = require('path')

require('dotenv').config()

app = express()
var todoApi = require('./routes')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
const { prototype } = require('stream')

//define logger and next
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

app.get('api/todos', function (req, res) {
  Todo.find({}, {'title': 1, 'durum': 1, 'id': 1, '_id':0},function (err, allTodos) {
      if (err) return console.error(err)
      res.send(allTodos)
  })
})

//app listening
var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});


//Mongodb connection with .env URI
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI, { useNewUrlParser: true }, () => {
});
module.exports = app
