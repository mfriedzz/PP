var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/purple-people');

// Seed the purple-people mongo Database
require('./models/seeds/coupleSeed.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

// api routes

var server = app.listen(4167, function() {
	console.log('Express server listening on port ' + server.address().port);
});
