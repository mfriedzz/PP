var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var searchController = require('./controllers/searchcontroller.js');
var authenticationController = require('./controllers/authentication');
var nodemailer = require('nodemailer');
var __ = require("underscore");

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/purple-people');

// Express Session allows us to use Cookies to keep track of
// a user across multiple pages. We also need to be able to load
// those cookies using the cookie parser
var session = require('express-session');
var cookieParser = require('cookie-parser');

// Flash allows us to store quick one-time-use messages
// between views that are removed once they are used.
// Useful for error messages.
var flash = require('connect-flash');

// Load in the base passport library so we can inject its hooks
// into express middleware.
var passport = require('passport');

// Load in our passport configuration that decides how passport
// actually runs and authenticates
var passportConfig = require('./config/passport');

// Seed the purple-people mongo Database
require('./models/seeds/coupleSeed.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// parse JSON data, which comes directly from angular
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Add in the cookieParser and flash middleware so we can
// use them later
app.use(cookieParser());
app.use(flash());

// Initialize the express session. Needs to be given a secret property.
// Also requires the resave option (will not force a resave of session if not modified)
// as well as saveUninitialized(will not automatically create empty data)
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false
}));

// Hook in passport to the middleware chain
app.use(passport.initialize());

// Hook in the passport session management into the middleware chain.
app.use(passport.session());


// Our get request for viewing the login page
app.get('/auth/login', authenticationController.login);

// Post received from submitting the login form
app.post('/auth/login', authenticationController.processLogin);

// Post received from submitting the signup form
app.post('/auth/signup', authenticationController.processSignup);

// Any requests to log out can be handled at this url
app.get('/auth/logout', authenticationController.logout);

// check to see if user is logged in

app.get('*', function(req, res, next) {
  // just use boolean for loggedIn
  isAlreadyLoggedin = (res.locals.loggedIn = (req.user) ? true : false);
  console.log("Checking if user is logged in ", isAlreadyLoggedin);

  next();
});

app.get('/', indexController.index);

// ***** IMPORTANT ***** //
// By including this middleware (defined in our config/passport.js module.exports),
// We can prevent unauthorized access to any route handler defined after this call
// to .use()

app.use(passportConfig.ensureAuthenticated);

// Because this route occurs after the ensureAuthenticated middleware, it will require
// authentication before access is allowed.

app.get('/compatiblecouples', searchController.renderPage);

// controllers
//app.get('/', indexController.index);

// app.get('/compatiblecouples', searchController.renderPage);
app.post('/compatiblecouples/search', searchController.search);
app.get('/compatiblecouplesearchdetails/:id', searchController.viewCoupleDetails);
app.get('/compatiblecouplessearchdetails/:id', searchController.viewChildren);
app.post('/compatiblecouples/:id', searchController.selectedCouple);
app.get('/couplemeetup',searchController.coupleMeetUp);
//app.get('/compatiblecouplesdetails/:id', searchController.viewCoupleDetails);

//app.get('/deleteApplicant/:id', indexController.deleteApplicant);

// Join Form after authentication

app.get('/join', indexController.join);

// contact form
app.get('/contact', indexController.contact);

// NodeMailer for contact form

app.post('/contact', function (req, res) {
  var mailOpts, smtpTrans;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  smtpTrans = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
          user: "me@gmail.com",

          pass: "application-specific-password" 
      }
  });
  //Mail options
  mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
      to: 'me@gmail.com',

      subject: 'Website contact form',
      text: req.body.message
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          res.render('contact', { title: 'Purple People - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
      }
      //Yay!! Email sent
      else {
          res.render('contact', { title: 'Purple People - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
      }
  });
});



// api routes
var port = process.env.PORT||4167;
var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
