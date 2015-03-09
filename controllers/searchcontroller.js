var Person = require('../models/couple.js');

var searchController = {
	
	renderPage: function(req,res) {
			res.render('compatiblecouples');
	},

	search: function(req, res) {
			var results = [];
			
			//console.log("Search CRITERIA!", searchCriteria);

			// was trying to pass dynamic variable to contact.details.hasChildren: searchCriteria.children

			// var formMinAge = $('#minage').val();
  	//	var formMaxAge = $('#maxage').val();
  	// 		var formChildrenYes = $('#childrenyes').val();
  	// 		var formChildrenNo = $('#childrenno').val();
  	// 		var formPetsYes = $('#petsyes').val();
  	// 		var formPetsNo = $('#petsno').val();
  	// 		var formMilitaryYes = $('#militaryyes').val();
  	// 		var formMilitaryNo = $('#militaryno').val();
			
			Person.find({"contact.age.minage": { "$gt" : 17, "$lt" : 65 }}, 
				{"contact.details.hasChildren": true },{ "contact.details.militaryService": false },
							{ "contact.details.pets": true },	
			 					function(err, person){
									if (err) throw err;
									console.log("Person.find", person);
								} //end of function
								//console.log("Search Find", this);

						); // end of Person.find

				
   
	

			} // end of search function
	
	};  // end of searchController

module.exports = searchController;
