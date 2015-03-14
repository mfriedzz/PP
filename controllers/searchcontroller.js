var Person = require('../models/couple.js');
var __ = require("underscore");

var searchController = {
	
	renderPage: function(req,res) {

			res.render('compatiblecouples', {
      						user: req.user
    					});

			// res.render('compatiblecouples', function(err, html){
			// 	$(.profile).append(user);
			// });
	},

	search: function(req, res) {
			var coupleResults = [];
			
			var searchCriteria = req.body;
			console.log("Search CRITERIA!", searchCriteria);

//Person.find({'contact.age.age' : { '$gt' : 17 }},
			Person.find(   {"contact.details.hasChildren": searchCriteria.children,
						 	"contact.pets.pets": searchCriteria.pets,
						 	"contact.details.militaryService": searchCriteria.military, 
							"contact.age.age" : { '$gte' : searchCriteria.minAge , '$lte' : searchCriteria.maxAge }
							},

		
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
									 		var flag = false;

									 			console.log("Have Children Test", (person.contact.details.hasChildren).toString(), (searchCriteria.children));

									 		if ( (((person.contact.details.hasChildren).toString()) == searchCriteria.children ) &&
									 				(((person.contact.details.hasChildren).toString()) && searchCriteria.children == "true"))		
									 			{
									 				 matchedOnChildren = " Have Children ";
									 				 console.log("Have Children!!!!!!!!!!");
									 				 flag = true;
									 				
									 			} // end of IF match on both having Children being true
									 		else if ( (((person.contact.details.hasChildren).toString()) == searchCriteria.children ) &&
									 				(((person.contact.details.hasChildren).toString()) && searchCriteria.children == "false") )
									 			{
									 				 matchedOnChildren = " Have No Children ";
									 				 console.log("Have NO Children!!!!!!!!!!");
									 				 flag = true;
									 			} //// end of IF match on both NOT having Children being true

									 		if ( (((person.contact.pets.pets).toString()) == searchCriteria.pets) &&
									 			(((person.contact.pets.pets).toString()) && searchCriteria.pets == "true") )
									 			{
									 				 matchedOnPets = " Have Pets ";
									 				console.log("Have Pets");
									 				flag = true;
									 			}
									 		else if ( (((person.contact.pets.pets).toString()) == searchCriteria.pets ) &&
									 				(((person.contact.pets.pets).toString()) && searchCriteria.pets == "false") )
									 			{
									 				 matchedOnPets = " Have No Pets ";
									 				 console.log("Have NO Pets!!!!!!!!!!");
									 				 flag = true;
									 			} //// end of IF match on both NOT having pets being true

									 		if ( (((person.contact.details.militaryService).toString()) == searchCriteria.military) &&
									 			(((person.contact.details.militaryService).toString()) && searchCriteria.military == "true") )

									 			{
									 				 matchedOnMilitary = " Served in the Military ";
									 				 	console.log("Served in the Military");
									 				 	flag = true;
									 			}
									 		else if ( (((person.contact.details.militaryService).toString()) == searchCriteria.military ) &&
									 				(((person.contact.details.militaryService).toString()) && searchCriteria.military == "false") )
									 			{
									 				 matchedOnMilitary = " Did NOT serve in The Military";
									 				 console.log("Have NO Military Service!!!!!!!!!");
									 				 flag = true;
									 			} //// end of IF match on both NOT having military service being true

									 		if ( 	(person.contact.age.age >= searchCriteria.minAge) && 
									 				(person.contact.age.age <= searchCriteria.maxAge))
									 			{
									 				 matchedOnAge =  "contact.age.age" + " Age Matched Range between " 
									 				 	+ searchCriteria.minAge + " and " + searchCriteria.maxAge;
									 				 flag = true;
									 			}

									 		if (flag = true) {


									 		coupleResults.push({firstname: person.contact.name.firstName,
									 							lastName: person.contact.name.lastName,
									 		 					coupleId: person.coupledWith.coupleId,
									 		 					uniqueId: person._id,
									 							matchedOn : {
									 											matchChild: 	matchedOnChildren,
									 							 				matchPets: 		matchedOnPets,
									 							 				matchMilitary: 	matchedOnMilitary, 
									 							 				matchAge:       matchedOnAge
									 							 			}
									 							 }); // end of coupleResults.push	
									 						} // end of if flag check
									 		
									 }); // end coupleResultsTemp map function

									console.log("Couple Results ", coupleResults);
			
										
										res.send(results);
							
								
								} // end of if else 
								
							} //end of function

						); // end of Person.find

				
   
	

			}, // end of search function

	viewCoupleDetails: function(req,res)
		{

			
		var viewid = req.params.id;
		console.log("View ID from searchController view", viewid);
		Person.findById(viewid, function(err, result){
			
			res.render('compatiblecouplesearchresult', result);
			// res.send(result);	
			//res.redirect('/compatiblecouplesearchresult');	
		});
			//  oldres.render('compatiblecouplesearchresult');

		} // end of viewCoupleDetails
	
	};  // end of searchController
	

module.exports = searchController;
