var Person = require('../models/couple.js');

var searchController = {
	
	renderPage: function(req,res) {
			res.render('compatiblecouples');
	},

	search: function(req, res) {
			var coupleResults = [];
			
			var searchCriteria = req.body;
			console.log("Search CRITERIA!", searchCriteria);


				//Person.find({'contact.age.age' : { '$gt' : 17 }},
			Person.find(   {"contact.details.hasChildren": searchCriteria.children,
						 	"contact.pets.pets": searchCriteria.pets,
						 	"contact.details.militaryService": searchCriteria.military, 
							"contact.age.age" : { '$gte' : searchCriteria.minAge , '$lte' : searchCriteria.maxAge }},

		
			 			function(err, results){
								if (err) {
									throw err;
								} else { 
									console.log("Person.find results ", results);
									
									 var coupleResultsTemp = results.map(function (person) { 
									 		var matchedOnChildren = "";
									 		var matchedOnPets = "";
									 		var matchedOnMilitary = "";
									 		var matchedOnAge = "";


									 		if ( "person.contact.details.hasChildren" == searchCriteria.children ){
									 				 matchedOnChildren = " Have Children ";
									 				
									 			} // end of IF match on have Children

									 		if ( "person.contact.pets.pets" === searchCriteria.pets){
									 				 matchedOnPets = " Have Pets ";
									 				console.log("Have Pets");
									 			}

									 		if ( "contact.details.militaryService" == searchCriteria.military){
									 				 matchedOnMilitary = " Served in the Military ";
									 			}

									 		if ( ("contact.age.age" >= searchCriteria.minAge) && ("contact.age.age" <= searchCriteria.maxAge)){
									 				 matchedOnAge =  "contact.age.age" + " Age Matched Range between " + searchCriteria.minAge + " and " + searchCriteria.maxAge;
									 			}

									 		coupleResults.push({firstname: person.firstName,
									 							lastName: person.lastName,
									 		 					coupleId: person.coupleId,
									 							matchedOn : {
									 											matchChild: matchedOnChildren,
									 							 				matchPets: matchedOnPets,
									 							 				matchMilitary: matchedOnMilitary, 
									 							 				matchAge:       matchedOnAge
									 							 			}
									 							 });	
									 		
									 }); // end coupleResultsTemp map function
									 console.log("Couple Results ", coupleResults);
									res.send(results);
									//res.render('compatiblecouplesearchresult', results); to call template
									
								} // end of if else 
								
							} //end of function

						); // end of Person.find

				
   
	

			} // end of search function
	
	};  // end of searchController

module.exports = searchController;
