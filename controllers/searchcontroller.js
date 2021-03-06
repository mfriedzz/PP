var Person = require('../models/user.js');
var __ = require("underscore");

// console.log ("got to search controller");
var searchController = {
	
	renderPage: function(req,res) {
				console.log("Search controller res render before res render");
			res.render('compatiblecouples', {
      						user: req.user
    					});
				console.log("Search controller res render after res render");

			// res.render('compatiblecouples', function(err, html){
			// 	$(.profile).append(user);
			// });
	},

	search: function(req, res) {
			var coupleResults = [];
			
			var searchCriteria = req.body;
			console.log("Search CRITERIA!", searchCriteria);

			// check to make sure logged in user is not searched

			// if (person.contact.addresses.home.homeEmail == loggedInUser){

			// 		console.log("Do not search the logged in user", loggedInUser);

					
			// 	}

			Person.find(   {"contact.details.hasChildren": searchCriteria.children,
						 	"contact.pets.pets": searchCriteria.pets,
						 	"contact.details.militaryService": searchCriteria.military, 
						 	"contact.addresses.home.homeState": searchCriteria.state,
						 	// "contact.addresses.home.homeCity": searchCriteria.distance, put in Google api lookup
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
									 				 matchedOnAge =  " Age Matched Range between " 
									 				 	+ searchCriteria.minAge + " and " + searchCriteria.maxAge;
									 				 flag = true;
									 			}

									 		if (flag = true) {


									 		coupleResults.push({firstName: person.contact.name.firstName,
									 							lastName: person.contact.name.lastName,
									 		 					coupleId: person.coupledWith.coupleId,
									 		 					uniqueId: person._id,
									 							matchedOn : {
									 											matchChild: 	matchedOnChildren,
									 							 				matchPets: 		matchedOnPets,
									 							 				matchMilitary: 	matchedOnMilitary, 
									 							 				matchAge:       matchedOnAge,
									 							 				matchState:     person.contact.addresses.home.homeState,
									 							 				matchDistance:  searchCriteria.distance 
									 							 			}
									 							 }); // end of coupleResults.push	
									 						} // end of if flag check
									 		
									 }); // end coupleResultsTemp map function
										// coupleResults = coupleResults.filter(function(n){ return n != undefined });
									// console.log("Couples Matched on: ", coupleResults);
									// console.log("Couples Matched without Undefined: ", coupleResults);
			
										// res.send(results);
										res.send({results:results, coupleResults:coupleResults});
							
								
								} // end of if else  function
								
							} //end of function

						); // end of Person.find

				
   
	

			}, // end of search function

	viewCoupleDetails: function(req,res)
		{

			
			var viewid = req.params.id;
			console.log("View ID from searchController view", typeof(viewid), typeof('coupledWith.coupleId'));
			Person.find( { "coupledWith.coupleId" : viewid } , function(err, results){
				if (err) {
					throw err;
				} else {
				// var couplePerson1 = result;
				// var couplePerson2 = find(   
				// 			{
				// 				"coupledWith.coupleId": result.coupledWith.coupleId
						 	
				// 			};

				var tempjsonresults = JSON.stringify(results);
						
				console.log("result from searchController viewCoupleDetails ", results , typeof(results));
				console.log("json stringify for results ", tempjsonresults);
				// res.render('compatiblecouplesearchresult', {couple: (JSON.stringify(results))});
				res.render('compatiblecouplesearchresult', {couple: tempjsonresults});
				// console.log("controller couple ", {couple});
				// res.send(result);	
				//res.redirect('/compatiblecouplesearchresult');	
			 } //end of else if
			});
			//  oldres.render('compatiblecouplesearchresult');

		}, // end of viewCoupleDetails

	viewChildren: function(req,res)
		{
		var viewid = req.params.id;
		console.log("View ID from searchController children", viewid);
		// var childCoupleId = this.
		// if 
		Person.find(viewid, function(err, result)
			{
			
			res.render('compatiblecouplessearchdetails/children',
					{
						children: result
					});
			
			// res.send(result);	
			//res.redirect('/compatiblecouplesearchresult');	
			});
			//  oldres.render('compatiblecouplesearchresult');

		}, // end of viewChildren
	coupleMeetUp: function(req,res)
		{
				res.render('couplemeetup');
			// res.render('couplemeetup', {
			// 	id:req.params.id
			// });
      								
		}, //end of coupleMeetUp

	selectedCouple: function(req,res)
			{
				console.log("selected couple req.query id ", req.params.id);
			}
	
	};  // end of searchController
	

module.exports = searchController;
