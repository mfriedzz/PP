var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var searchController = require('./controllers/searchcontroller.js');
var __ = require("underscore");

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/purple-people');

// Seed the purple-people mongo Database
require('./models/seeds/coupleSeed.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// parse JSON data, which comes directly from angular
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// controllers
app.get('/', indexController.index);

app.get('/compatiblecouples', searchController.renderPage);
app.post('/compatiblecouples/search', searchController.search);
app.get('/compatiblecouplesearchresult', searchController.viewCoupleDetails);

// api routes

var server = app.listen(4167, function() {
	console.log('Express server listening on port ' + server.address().port);
});
