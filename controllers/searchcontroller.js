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

		console.log("Search Controller got here ", req);			
	//	console.log("Find feature on search controller", Person.contact.details.hasChildren, Person.contact.details.militaryService,
	//			Person.contact.details.pets, Person.contact.age.age);

				Person.find({'contact.age.age' : { '$gt' : 17 }},
			//Person.find({"contact.details.hasChildren": true },
			//				{"contact.details.pets": true}, {"contact.details.militaryService": false},
			//				{"contact.age.age" : { '$gt' : 17, '$lt' : 65 }},	
			 			function(err, results){
								if (err) throw err;
									console.log("Person.find results ", results);
									//console.log("In Post Person Age", results);
									res.send(results);
									
								} //end of function

						); // end of Person.find

				
   
	

			} // end of search function
	
	};  // end of searchController

module.exports = searchController;
