// Couple Seed 

var Person = require('../user.js');
console.log("COuple Seed");
Person.find({}, function(err, documents){
	if(documents.length === 0){
		// Prefill the empty database with some Couples

		var person1 = new Person({
		
		username: "Person1", 
    				
    				

	  	email: "Person1@aol.com",
	    				
	  
	  	password: "Password1",


		coupledWith:        {
								coupleId: 1
							},
		
		contact:
				 {
		  	
					name: {				firstName: "Michael",
										middleName: "David",
										lastName: "Friedman"
							},

					phones:{			homePhone: "508-693-0056",
										mobilePhone: "774-563-9352",
										workPhone: "508-555-1212"
							},

					sex:    {			sex: "male"
						    },

					age:    { 			birthDate: 10/16/1966,
										age: 45
							},

					birthplace: { 		birthCity: "Tuscon",
										birthState: "Arizona"
								},

					addresses: {	
									home: {	
												homeStreetAddress: "67 Monroe Ave",
												homeMailingAddress: "P.O. Box 1296",
												homeCity: "Oak Bluffs",
												homeState: "Massachusetts",
												homeZipCode: "02557",
												homeEmail: "mfriedzz@ix.netcom.com",
												homeTwitter: "xxxx"
											},

									work: {		workPlaceName: "MV Location inc",
												workStreetAddress: "12 Main Street",
												workMailingAddress: "Box 345",
												workCity: "Tisbury",
												workState: "Massachusetts",
												workZipCode: "02568",
												workEmail: "mf@aol.com",
												workTwitter: "  dd",
												workJobPosition: " Banker",
												workJobDescription: " VH Bank Manager"
										  },
									}, // addresses end

					details: {			
										howLongTogether: 10,
										hasChildren:true,
										numberOfChildren: 1,
										militaryService: 'false',
										militaryDetails: "   ",
										allowCoriCheck: 'true',
										couplePic1: 'http://images4.fanpop.com/image/photos/16100000/O-Conell-and-Evey-movie-couples-16197664-1780-1167.jpg',
                        				couplePic2: 'http://images.idiva.com/media/photogallery/2012/Jan/happy_couple.jpg',
                        				couplePic3: 'http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/infertility_treatments_slideshow/getty_rf_photo_of_couple_kayaking.jpg',
										activities: []
							 },

				  	ifChild: {

												isChild:false,
												childLikes: [],
												childParent1: null,
												childParent2: null,
												childpic1: null,
                        						childpic2: null
							  },

					pets: {				
										pets: 'true',
										petType: "dog",
										petBreed: "Mutt",
										petName:" Ruby"
						   },

					marriage: {				   
										married: 'true',
										civilUnion: 'false'
							  }
				 } // end of contact

	}); // end of Person 1

	person1.save();



var person2 = new Person({

		username: "Person2", 
    				
    				

	  	email: "Person2@aol.com",
	    				
	  
	  	password: "Password1",

		coupledWith:        {
								coupleId: 1
							},
		
		contact:
				 { 	
					name: {				firstName: "Katherine",
										middleName: "Adair",
										lastName: "Friedman"
							},

					phones:{			homePhone: "508-693-0056",
										mobilePhone: "508-728-6554",
										workPhone: "508-555-1212"
							},

					sex:    {			sex: "female"
						    },

					age:    { 			birthDate: 10/4/1967,
										age: 45
							},

					birthplace: { 		birthCity: "Worcester",
										birthState: "Massachusetts"
								},

					addresses: {	
									home: {	
												homeStreetAddress: "67 Monroe Ave",
												homeMailingAddress: "P.O. Box 1296",
												homeCity: "Oak Bluffs",
												homeState: "Massachusetts",
												homeZipCode: "02557",
												homeEmail: "boolah@aol.com",
												homeTwitter: "xxxx"
											},

									work: {		workPlaceName: "MV Hospital",
												workStreetAddress: "1 Hospital Street",
												workMailingAddress: "Box 5",
												workCity: "Oak Bluffs",
												workState: "Massachusetts",
												workZipCode: "02557",
												workEmail: "krf@mvhospital.com",
												workTwitter: "  dd",
												workJobPosition: " Nurse Practioner",
												workJobDescription: " MV Hospital Julie Stunkel & Henry Knider "
										  },
									}, // addresses end

					details: {			
										howLongTogether: 10,
										hasChildren:true,
										numberOfChildren: 1,
										militaryService: 'false',
										militaryDetails: [],
										allowCoriCheck: 'true',
										couplePic1: 'http://images4.fanpop.com/image/photos/16100000/O-Conell-and-Evey-movie-couples-16197664-1780-1167.jpg',
                        				couplePic2: 'http://images.idiva.com/media/photogallery/2012/Jan/happy_couple.jpg',
                        				couplePic3: 'http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/infertility_treatments_slideshow/getty_rf_photo_of_couple_kayaking.jpg',
										activities: []
							 },

					ifChild: 	{

												isChild:false,
												childLikes: [],
												childParent1: null,
												childParent2: null,
												childpic1: null,
                        						childpic2: null
									},

					pets: {				
										pets: 'true',
										petType: "dog",
										petBreed: "Mutt",
										petName:" Ruby"
						   },

					marriage: {				   
										married: 'true',
										civilUnion: 'false'
							  }
				 } // end of contact

	}); // end of Person 2

	person2.save();

var person3 = new Person({

		username: "Person3", 
    				
    				

	  	email: "Person3@aol.com",
	    				
	  
	  	password: "Password1",

		coupledWith:        {
								coupleId: 2
							},
		
		contact:
				 { 	
					name: {				firstName: "Rich",
										middleName: "bob",
										lastName: "Little"
							},

					phones:{			homePhone: "617-325-1103",
										mobilePhone: "774-563-9900",
										workPhone: "617-555-2222"
							},

					sex:    {			sex: "male"
						    },

					age:    { 			birthDate: 04/11/1959,
										age: 52
							},

					birthplace: { 		birthCity: "Brookline",
										birthState: "Massachusetts"
								},

					addresses: {	
									home: {	
												homeStreetAddress: "21 Hilburn Ave",
												homeMailingAddress: null,
												homeCity: "Roslindale",
												homeState: "Massachusetts",
												homeZipCode: "02131",
												homeEmail: "richiebfd@gmail.com",
												homeTwitter: null
											},

									work: {		workPlaceName: "Boston Fire Department",
												workStreetAddress: "1 Main Street",
												workMailingAddress: "Box 35",
												workCity: "Boston",
												workState: "Massachusetts",
												workZipCode: "02511",
												workEmail: null,
												workTwitter: null,
												workJobPosition: "Firefighter",
												workJobDescription: "Boston Fire Department"
										  },
									}, // addresses end

					details: {			
										howLongTogether: 5,
										hasChildren:false,
										numberOfChildren: 0,
										militaryService: 'false',
										militaryDetails: [],
										allowCoriCheck: 'true',
										couplePic1: 'http://images4.fanpop.com/image/photos/16100000/O-Conell-and-Evey-movie-couples-16197664-1780-1167.jpg',
                        				couplePic2: 'http://images.idiva.com/media/photogallery/2012/Jan/happy_couple.jpg',
                        				couplePic3: 'http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/infertility_treatments_slideshow/getty_rf_photo_of_couple_kayaking.jpg',
										activities: []
							 },

					ifChild: 	{

												isChild:false,
												childLikes: [],
												childParent1: null,
												childParent2: null,
												childpic1: null,
                        						childpic2: null
									},

					pets: {				
										pets: false,
										petType: null,
										petBreed: null,
										petName: null
						   },

					marriage: {				   
										married: false,
										civilUnion: false
							  }
				 } // end of contact

	}); // end of Person 3

	person3.save();

	var person4 = new Person({


		username: "Person4", 
    				
    				

	  	email: "Person4@aol.com",
	    				
	  
	  	password: "Password1",


		coupledWith:        {
								coupleId: 2
							},
		
		contact:
				 { 	
					name: {				firstName: "Barbara",
										middleName: "jane",
										lastName: "Smith"
							},

					phones:{			homePhone: "508-693-1111",
										mobilePhone: "774-563-222",
										workPhone: "508-555-1212"
							},

					sex:    {			sex: "female"
						    },

					age:    { 			birthDate: 01/06/1956,
										age: 55
							},

					birthplace: { 		birthCity: "Bridgeport",
										birthState: "Colorado"
								},

					addresses: {	
									home: {	
												homeStreetAddress: "27 Jansen Ave",
												homeMailingAddress: "P.O. Box 5213",
												homeCity: "Denver",
												homeState: "Colorado",
												homeZipCode: "23412",
												homeEmail: "bsmith@ll.com",
												homeTwitter: null
											},

									work: {		workPlaceName: "Denver Hospital",
												workStreetAddress: "1 Main Street",
												workMailingAddress: "Box 3435",
												workCity: "Denver",
												workState: "Colorado",
												workZipCode: "23412",
												workEmail: "bsmith@aol.com",
												workTwitter: null,
												workJobPosition: "Manager",
												workJobDescription: "Road Side Inn"
										  },
									}, // addresses end

					details: {			
										howLongTogether: 5,
										hasChildren:false,
										numberOfChildren: 0,
										militaryService: false,
										militaryDetails: [],
										allowCoriCheck: true,
										couplePic1: 'http://images4.fanpop.com/image/photos/16100000/O-Conell-and-Evey-movie-couples-16197664-1780-1167.jpg',
                        				couplePic2: 'http://images.idiva.com/media/photogallery/2012/Jan/happy_couple.jpg',
                        				couplePic3: 'http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/infertility_treatments_slideshow/getty_rf_photo_of_couple_kayaking.jpg',
										activities: []
							 },

					ifChild: 	{

												isChild:false,
												childLikes: [],
												childParent1: null,
												childParent2: null,
												childpic1: null,
                        						childpic2: null
									},

					pets: {				
										pets: 'true',
										petType: "dog",
										petBreed: "Mutt",
										petName:"DoggyDog"
						   },

					marriage: {				   
										married: false,
										civilUnion: false
							  }
				 } // end of contact

	}); // end of Person 1

	person4.save();

var person5 = new Person({


		username: "Person5", 
    				
    				

	  	email: "Person5@aol.com",
	    				
	  
	  	password: "Password1",


		coupledWith:        {
								coupleId: 3
							},
		
		contact:
				 { 	
					name: {				firstName: "Laura",
										middleName: "Mary",
										lastName: "Maestro"
							},

					phones:{			homePhone: "617-222-1212",
										mobilePhone: "774-333-1111",
										workPhone: "617-555-1212"
							},

					sex:    {			sex: "female"
						    },

					age:    { 			birthDate: 02/16/1952,
										age: 58
							},

					birthplace: { 		birthCity: "Cambridge",
										birthState: "Massachusetts"
								},

					addresses: {	
									home: {	
												homeStreetAddress: "3 Longwood Ave",
												homeMailingAddress: "P.O. Box 1312",
												homeCity: "Cambridge",
												homeState: "Massachusetts",
												homeZipCode: "01421",
												homeEmail: "lmaestro@aol.com",
												homeTwitter: null
											},

									work: {		workPlaceName: "Harvard University",
												workStreetAddress: "12 Main Street",
												workMailingAddress: "Box 45",
												workCity: "Cambridge",
												workState: "Massachusetts",
												workZipCode: "01421",
												workEmail: "lmaestro@harvardu.org",
												workTwitter: null,
												workJobPosition: " Professor",
												workJobDescription: " Sociology"
										  },
									}, // addresses end

					details: {			
										howLongTogether: 3,
										hasChildren: false,
										numberOfChildren: 0,
										militaryService: false,
										militaryDetails: [],
										allowCoriCheck: true,
										couplePic1: 'http://images4.fanpop.com/image/photos/16100000/O-Conell-and-Evey-movie-couples-16197664-1780-1167.jpg',
                        				couplePic2: 'http://images.idiva.com/media/photogallery/2012/Jan/happy_couple.jpg',
                        				couplePic3: 'http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/infertility_treatments_slideshow/getty_rf_photo_of_couple_kayaking.jpg',
										activities: []
							 },

					ifChild: 	{

												isChild:false,
												childLikes: [],
												childParent1: null,
												childParent2: null,
												childpic1: null,
                        						childpic2: null
									},

					pets: {				
										pets: false,
										petType: null,
										petBreed: null,
										petName: null
						   },

					marriage: {				   
										married: false,
										civilUnion: true
							  }
				 } // end of contact

	}); // end of Person 1

	person5.save();

var person6 = new Person({


		username: "Person6", 
    				
    				

	  	email: "Person6@aol.com",
	    				
	  
	  	password: "Password1",

		coupledWith:        {
								coupleId: 3
							},
		
		contact:
				 { 	
					name: {				firstName: "Lori",
										middleName: "Missy",
										lastName: "Rainer"
							},

					phones:{			homePhone: "617-222-1111",
										mobilePhone: "774-444-1212",
										workPhone: "617-555-1212"
							},

					sex:    {			sex: "female"
						    },

					age:    { 			birthDate: 10/06/1970,
										age: 42
							},

					birthplace: { 		birthCity: "Los Angelos",
										birthState: "California"
								},

					addresses: {	
									home: {	
												homeStreetAddress: "3 longwood Ave",
												homeMailingAddress: "P.O. Box 1312",
												homeCity: "Cambridge",
												homeState: "Massachusetts",
												homeZipCode: "01421",
												homeEmail: "lrainer@aol.com",
												homeTwitter: null
											},

									work: {		workPlaceName: "Harvard University",
												workStreetAddress: "12 Main Street",
												workMailingAddress: "Box 45",
												workCity: "Cambridge",
												workState: "Massachusetts",
												workZipCode: "01421",
												workEmail: "lrainer@harvardu.org",
												workTwitter:null,
												workJobPosition: "Professor",
												workJobDescription: "Political Science Department"
										  },
									}, // addresses end

					details: {			
										howLongTogether: 3,
										hasChildren: false,
										numberOfChildren: 0,
										militaryService: true,
										militaryDetails: ["army", "PFC", "Iraq War 2003", "Gulf War", "Hospital Platoon"],
										allowCoriCheck: true,
										couplePic1: 'http://images4.fanpop.com/image/photos/16100000/O-Conell-and-Evey-movie-couples-16197664-1780-1167.jpg',
                        				couplePic2: 'http://images.idiva.com/media/photogallery/2012/Jan/happy_couple.jpg',
                        				couplePic3: 'http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/infertility_treatments_slideshow/getty_rf_photo_of_couple_kayaking.jpg',
										activities: ["bike", "jog"]
							 },

					ifChild: 	{

												isChild:false,
												childLikes: [],
												childParent1: null,
												childParent2: null,
												childpic1: null,
                        						childpic2: null
									},

					pets: {				
										pets: true,
										petType: "dog",
										petBreed: "Mutt",
										petName: "Candy"
						   },

					marriage: {				   
										married: false,
										civilUnion: true
							  }
				 } // end of contact

	}); // end of Person 1

	person6.save();

	var person7 = new Person({


		username: "Person7", 
    				
    				

	  	email: "Person7@aol.com",
	    				
	  
	  	password: "Password1",


		coupledWith:        {
								coupleId: 1
							},
		
		contact:
				 { 	
					name: {				firstName: "Zachary",
										middleName: "Luke",
										lastName: "Friedman"
							},

					phones:{			homePhone: "508-693-0056",
										mobilePhone: "508-728-6554",
										workPhone: "508-555-1212"
							},

					sex:    {			sex: "male"
						    },

					age:    { 			birthDate: 05/27/2011,
										age: 3
							},

					birthplace: { 		birthCity: "Boston",
										birthState: "Massachusetts"
								},

					addresses: {	
									home: {	
												homeStreetAddress: "67 Monroe Ave",
												homeMailingAddress: "P.O. Box 1296",
												homeCity: "Oak Bluffs",
												homeState: "Massachusetts",
												homeZipCode: "02557",
												homeEmail: null,
												homeTwitter: null
											},

									work: {		workPlaceName: null,
												workStreetAddress: null,
												workMailingAddress: null,
												workCity: null,
												workState: null,
												workZipCode: null,
												workEmail: null,
												workTwitter: null,
												workJobPosition: null,
												workJobDescription: null
										  },
									}, // addresses end

					details: {			
										howLongTogether: 10,
										hasChildren:false,
										numberOfChildren: 0,
										militaryService: false,
										militaryDetails: [],
										allowCoriCheck: false,
										couplePic1: null,
                        				couplePic2: null,
                        				couplePic3: null,
										activities: ["Hot Wheels", "Swimming", "Disney Channel", "Construction"]
							 },

					ifChild: 	{

												isChild:true,
												childLikes: ["Food", "Sledding", "Walking"],
												childParent1: "Michael David Friedman",
												childParent2: "Katherine Reardon Friedman",
												childpic1: '/pics/zack.jpg',
                        						childpic2: null
									},

					pets: {				
										pets: true,
										petType: "dog",
										petBreed: "Mutt",
										petName:" Ruby"
						   },

					marriage: {				   
										married: false,
										civilUnion: false
							  }
				 } // end of contact

	}); // end of Person 7 Child 1 CoupleId 1

	person7.save();

	var person8 = new Person({


		username: "Person8", 
    				
    				

	  	email: "Person8@aol.com",
	    				
	  
	  	password: "Password1",


		coupledWith:        {
								coupleId: 2
							},
		
		contact:
				 { 	
					name: {				firstName: "Lynn",
										middleName: "Laura",
										lastName: "Little"
							},

					phones:{			homePhone: "508-693-1212",
										mobilePhone: "508-728-1234",
										workPhone: "508-111-1212"
							},

					sex:    {			sex: "female"
						    },

					age:    { 			birthDate: 03/27/1988,
										age: 26
							},

					birthplace: { 		birthCity: "Swampscott",
										birthState: "Massachusetts"
								},

					addresses: {	
									home: {	
												homeStreetAddress: "11 State Road",
												homeMailingAddress: "P.O. Box 96",
												homeCity: "Dover",
												homeState: "Massachusetts",
												homeZipCode: "02121",
												homeEmail: null,
												homeTwitter: null
											},

									work: {		workPlaceName: null,
												workStreetAddress: null,
												workMailingAddress: null,
												workCity: null,
												workState: null,
												workZipCode: null,
												workEmail: null,
												workTwitter: null,
												workJobPosition: null,
												workJobDescription: null
										  },
									}, // addresses end

					details: {			

										howLongTogether: 5,
										hasChildren:false,
										numberOfChildren: 0,
										militaryService: false,
										militaryDetails: [],
										allowCoriCheck: false,
										couplePic1: null,
                        				couplePic2: null,
                        				couplePic3: null,
										activities: ["Hot Wheels", "Swimming", "Disney Channel", "Construction"]
							 },

					ifChild: 	{

												isChild:true,
												childLikes: [],
												childParent1: "Rich Bob Little",
												childParent2: "Barbara Jane Smith",
												childpic1: null,
                        						childpic2: null
									},

					pets: {				
										pets: true,
										petType: "cat",
										petBreed: "stray",
										petName:"Mittens"
						   },

					marriage: {				   
										married: false,
										civilUnion: false
							  }
				 } // end of contact

	}); // end of Person 8

	person8.save();

	var person9 = new Person({


		username: "Person9", 
    				
    				

	  	email: "Person9@aol.com",
	    				
	  
	 //  	password: "Password1",



		coupledWith:        {
								coupleId: 2
							},
		
		contact:
				 { 	
					name: {				firstName: "Jack",
										middleName: "Lot",
										lastName: "Little"
							},

					phones:{			homePhone: "508-693-222",
										mobilePhone: "508-728-1234",
										workPhone: "508-111-1212"
							},

					sex:    {			sex: "male"
						    },

					age:    { 			birthDate: 05/07/2011,
										age: 3
							},

					birthplace: { 		birthCity: "Lynn",
										birthState: "Massachusetts"
								},

					addresses: {	
									home: {	
												homeStreetAddress: "11 Oak Road",
												homeMailingAddress: "P.O. Box 916",
												homeCity: "Dover",
												homeState: "Massachusetts",
												homeZipCode: "02121",
												homeEmail: null,
												homeTwitter: null
											},

									work: {		workPlaceName: null,
												workStreetAddress: null,
												workMailingAddress: null,
												workCity: null,
												workState: null,
												workZipCode: null,
												workEmail: null,
												workTwitter: null,
												workJobPosition: null,
												workJobDescription: null
										  },
									}, // addresses end

					details: {			

										howLongTogether: 5,
										hasChildren:false,
										numberOfChildren: 0,
										militaryService: false,
										militaryDetails: [],
										allowCoriCheck: false,
										couplePic1: null,
                        				couplePic2: null,
                        				couplePic3: null,
										activities: ["Day Care", "Sucking Thumb"]
							 },

					ifChild: 	{

												isChild:true,
												childLikes: ["Color Blue", "Transformers", "Kickball", "Shiny Objects", "Running", "Screaming", "Swimming"],
												childParent1: "Rich Bob Little",
												childParent2: "Barbara Jane Smith",
												childpic1: null,
                        						childpic2: null
									},

					pets: {				
										pets: true,
										petType: "dog",
										petBreed: "St Bernard",
										petName:"Stripe"
						   },

					marriage: {				   
										married: false,
										civilUnion: false
							  }
				 } // end of contact

	}); // end of Person  child

	person9.save();




 } // end if statement

}); // end of Person.find