var Person = require('../models/couple.js');

var searchController = {
	
	renderPage: function(req,res) {
			res.render('compatiblecouples');
	},

	search: function(req, res) {
			var results = [];
			
			console.log("Search CRITERIA!", searchCriteria);

			// was trying to pass dynamic variable to contact.details.hasChildren: searchCriteria.children
			
			Person.find({ "contact.details.hasChildren": true, function(err,person){
					if (err)
					{
					console.log("error", err);
					 return;
					}
					console.log("search result", person);
					
			})	
   
	

	}
	
};

module.exports = searchController;
