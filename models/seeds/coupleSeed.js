// Couple Seed 

var Couple = require('../couple.js');

Couple.find({}, function(err, documents){
	if(documents.length === 0){
		// Prefill the empty database with some Couples

		var person1 = new Person({

			// DATA 	

// Defining Person # 1 Object to be passed to the Couple Class

		coupleid:1,
		firstName: "Michael",
		middleName: "David",
		lastName: "Friedman",
		homePhone: "508-693-0056",
		mobilePhone: "774-563-9352",
		workPhone: "508-555-1212",
		sex: male,
		birthDate: 10/16/1966,
		age: 45,
		birthCity: "Tuscon",
		birthState: "Arizona",
		homeStreetAddress: "67 Monroe Ave",
		homeMailingAddress: "P.O. Box 1296",
		homeCity: "Oak Bluffs",
		homeState: "Massachusetts",
		homeZipCode: "02557",
		homeEmail: "mfriedzz@ix.netcom.com",
		homeTwitter: "xxxx",
		workPlaceName: "MV Location inc",
		workStreetAddress: "12 Main Street",
		workMailingAddress: "Box 345",
		workCity: "Tisbury",
		workState: "Massachusetts",
		workZipCode: "02568",
		workEmail: "mf@aol.com",
		workTwitter: "  dd",
		workJobPosition: " Banker",
		workJobDescription: " VH Bank Manager",
		hasChildren:'true',
		numberOfChildren: 1,
		militaryService: 'false',
		militaryDetails: "   ",
		allowCoriCheck: 'true',
		activities: [],
		pets: 'true',
		petType: "dog",
		petBreed: "Mutt",
		petName:" Ruby",
		married: 'true',
		civilUnion: 'false'
	}); // end of Person 1
	person1.save();

		// Person 2 Details
	var person2 = new Person({
		coupleid:1,
		firstName: "Katherine",
		middleName: "Adair",
		lastName: "Reardon",
		homePhone: "508-693-0056",
		mobilePhone: "508-728-6554",
		workPhone: "508-555-1212",
		sex: female,
		birthDate: 10/4/1967,
		age: 44,
		birthCity: "Worcester",
		birthState: "Massachusetts",
		homeStreetAddress: "67 Monroe Ave",
		homeMailingAddress: "P.O. Box 1296",
		homeCity: "Oak Bluffs",
		homeState: "Massachusetts",
		homeZipCode: "02557",
		homeEmail: "boolah@aol.com",
		homeTwitter: "xxxx",
		workPlaceName: "MV Hospital",
		workStreetAddress: "12 Main Street",
		workMailingAddress: "Box 345",
		workCity: "Oak Bluffs",
		workState: "Massachusetts",
		workZipCode: "02557",
		workEmail: "mvboolah@aol.com",
		workTwitter: "  dd",
		workJobPosition: " Nurse Practioner",
		workJobDescription: " MV Hospital Julie Stunkel & Henry Knider",
		hasChildren:'true',
		numberOfChildren: 1,
		militaryService: 'false',
		militaryDetails: "   ",
		allowCoriCheck: 'true',
		activities: [],
		pets: 'true',
		petType: "dog",
		petBreed: "Mutt",
		petName: "Ruby",
		married: 'true',
		civilUnion: 'false',
	}); // end of Person 2	

	person2.save();

// var person3 = new Person({
	
// 		coupleid:1,
// 		firstName: "Zachary",
// 		middleName: "Luke",
// 		lastName: "Friedman",
// 		birthDate: "5/27/2011",
// 		age: 3,
// 		sex: "Male",
// 		activities: [],
// 		childLikes: [],
// 		childParent1: "Michael Friedman",
// 		childParent2: "Katherine Friedman",
// 		childPets: 'true',
// 		childPetType: "dog",
// 		childPetBreed: "Mutt",
// 		childPetName: "Ruby"

// 	});  // end of Couple 1

// 	Person3.save();

	

	// Defining Couple # 2 Object to be passed to the Couple Class
	var person3 =  new Person({
		coupleid:2,
		firstName: "Rich",
		middleName: "Ryan",
		lastName: "Little",
		homePhone: "617-111-2222",
		mobilePhone: "617-555-9352",
		workPhone: "617-555-1212",
		sex: "male",
		birthDate: 01/16/1964,
		age: 45,
		birthCity: "Boston",
		birthState: "Massachusetts",
		homeStreetAddress: "25 Hilburn Place ",
		homeMailingAddress: "P.O. Box 43",
		homeCity: "Roslindale",
		homeState: "Massachusetts",
		homeZipCode: "02131",
		homeEmail: "mrlittle@aol.com",
		homeTwitter: "xxxx",
		workPlaceName: "Boston Fire Department",
		workStreetAddress: "1 Main Street",
		workMailingAddress: "Box 34",
		workCity: "Boston",
		workState: "Massachusetts",
		workZipCode: "02132",
		workEmail: "rl@aol.com",
		workTwitter: "  xx",
		workJobPosition: " Fire Fighter",
		workJobDescription: " Hazardous Materials",
		hasChildren:'true',
		numberOfChildren: 2,
		militaryService: 'false',
		militaryDetails: "   ",
		allowCoriCheck: 'true',
		activities: [],
		pets: 'false',
		petType: null,
		petBreed: null,
		petName: null,
		married: 'false',
		civilUnion: 'false'

		}); // end of Person 4

	person3.save();

		// Person 5 Details
var person4 =  new Person({
		coupleid:2,
		firstName: "Barbara",
		middleName: "dana",
		lastName: "Smith",
		homePhone: "617-555-1156",
		mobilePhone: "508-111-1254",
		workPhone: "508-555-1214",
		sex: "female",
		birthDate: 10/7/1975,
		age: 37,
		birthCity: "Newton",
		birthState: "Massachusetts",
		homeStreetAddress: "1 Granby Ave",
		homeMailingAddress: "P.O. Box 12",
		homeCity: "Newton",
		homeState: "Massachusetts",
		homeZipCode: "02133",
		homeEmail: "bsmith@aol.com",
		homeTwitter: "xxxx",
		workPlaceName: "Needham Hospital",
		workStreetAddress: "12 Main Street",
		workMailingAddress: "Box 5",
		workCity: "Needham",
		workState: "Massachusetts",
		workZipCode: "02512",
		workEmail: "bsmith@newtonhospital.com",
		workTwitter: "  ",
		workJobPosition: " Nurse Practioner",
		workJobDescription: " Newton City Hospital",
		hasChildren:'false',
		numberOfChildren: 0,
		militaryService: 'false',
		militaryDetails: "   ",
		allowCoriCheck: 'true',
		activities: [],
		pets: 'true',
		petType: "cat",
		petBreed: "Tomcat",
		petName: "Suddy",
		married: 'false',
		civilUnion: 'false'

}); // end of Person 5	

	person4.save();

		// child 1
		
		// childcoupleid:2,
		// childFirstName: "Lynn",
		// childMiddleName: "Laura",
		// childLastName: "Little",
		// childBirthDate: "3/27/1988",
		// childAge: 26,
		// childSexkey: "Female",
		// childActivities: [],
		// childLikes: [],
		// childParent1: "Rich Little",
		// childParent2: null,
		// childPets: 'true',
		// childPetType: "fish",
		// childPetBreed: "Guppy",
		// childPetName: "Swimmy",

	
		//child 2

	// 	childcoupleid:2,
	// 	childFirstName: "Jack",
	// 	childMiddleName: "Lot",
	// 	childLastName: "Little",
	// 	childBirthDate: "5/7/2001",
	// 	childAge: 3,
	// 	childSexkey: "Male",
	// 	childActivities: ["biking", "tag", "kickball"],
	// 	childLikes: ["Walt Disney World", "Transformers"],
	// 	childParent1: "Rich Little",
	// 	childParent2: "Kat Killie",
	// 	childPets: 'false',
	// 	childPetType: null,
	// 	childPetBreed: null,
	// 	childPetName: null
	// }); // End of Couple 2

	// couple2.save();



// Defining Person 6 Object to be passed to the Couple Class

	var person5 =  new Person({

		coupleid:3,
		firstName: "Lynn",
		middleName: "Radar",
		lastName: "Rodger",
		homePhone: "508-693-0045",
		mobilePhone: "774-563-1152",
		workPhone: "508-555-1212",
		sex: "female",
		birthDate: 10/15/1986,
		age: 28,
		birthCity: "Cambridge",
		birthState: "Massachusetts",
		homeStreetAddress: "12 putname Ave",
		homeMailingAddress: "P.O. Box 16",
		homeCity: "Cambridge",
		homeState: "Massachusetts",
		homeZipCode: "01672",
		homeEmail: "lradar@aol.com",
		homeTwitter: "xxxx",
		workPlaceName: "Harvard University",
		workStreetAddress: "121 Main Street",
		workMailingAddress: "Box 35",
		workCity: "Cambridge",
		workState: "Massachusetts",
		workZipCode: "01672",
		workEmail: "lrodger@harvardu.org",
		workTwitter: "  ldhu",
		workJobPosition: "Professor",
		workJobDescription: "English Department",
		hasChildren:'false',
		numberOfChildren: 0,
		militaryService: 'true',
		militaryDetails: ["army", "PFC", "Iraq War 2003", "Gulf War", "Hospital Platoon"],
		allowCoriCheck: 'true',
		activities: ["bike", "Jog"],
		pets: 'true',
		petType: "dog",
		petBreed: "Mutt",
		petName:"Curly",
		married: 'false',
		civilUnion: 'true'

}); // end of Person 6	

	person5.save();


		// Partner 2 Details
	var person6 =  new Person({
		coupleid:3,
		firstName: "Lisa",
		middleName: "Lona",
		lastName: "Likee",
		homePhone: "617-333-1212",
		mobilePhone: "774-555-1212",
		workPhone: "617-111-1212",
		sex: "female",
		birthDate: 10/22/1987,
		age: 28,
		birthCity: "Chicago",
		birthState: "Illinois",
		homeStreetAddress: "12 Recept Ave",
		homeMailingAddress: "P.O. Box 96",
		homeCity: "Cambridge",
		homeState: "Massachusetts",
		homeZipCode: "01672",
		homeEmail: "llikkk@aol.com",
		homeTwitter: "xxxx",
		workPlaceName: "Harvard University",
		workStreetAddress: "12 Main Street",
		workMailingAddress: "Box 3",
		workCity: "Cambridge",
		workState: "Massachusetts",
		workZipCode: "01672",
		workEmail: "llikee@harvardu.org",
		workTwitter: null ,
		workJobPosition: " Assistant Professor",
		workJobDescription: " Sociology Department",
		hasChildren:'false',
		numberOfChildren: 0,
		militaryService: 'false',
		militaryDetails: "   ",
		allowCoriCheck: 'true',
		activities: [],
		pets: 'false',
		petType: null,
		petBreed: null,
		petName: null,
		married: 'false',
		civilUnion: 'true'
	}); // end of Person 6	

	person6.save();


 } // end if statement

}); // end of Couple.find