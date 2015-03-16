var indexController = {
	// Handle incoming requests for the '/' route
  index: function(req, res){

    // Since this route requires authentication,
    // called out in app.js, we have access to the
    // logged-in user's document from the database
    // via the injected "req.user" variable
   
    res.render('index', {
      user: req.user
    });
   console.log("req.user", req.user);
  },


  contact: function(req, res)
    {

        res.render('contact', { title: 'Purple People - Contact', page: 'contact' });

    },

  join: function(req,res)
    {

      res.render('join');
    },




}; // end of indexController

// Export our index control

module.exports = indexController;