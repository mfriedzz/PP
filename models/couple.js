//couple.js
//  Schema and Model for the Couple, defined as a person

var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
		

			coupledWith:    		{
										coupleId: Number
									} ,			
			contact: {	

						name: 		{
										firstName: String,
										middleName: String,
										lastName: String,
									},
		
						phones: 	{
										homePhone: String,
										mobilePhone: String,
										workPhone: String,
									},

						sex: 		{
										sex: String,
									}, 

						age: 		{
										birthDate: Date,
										age: Number,
									},

						birthplace: {
										birthCity: String,
										birthState: String,
									},

						addresses: {  

									home: 	{
												homeStreetAddress: String,
												homeMailingAddress: String,
												homeCity: String,
												homeState: String,
												homeZipCode: String,
												homeEmail: String,
												homeTwitter: String,
											},

									work:   {

												workPlaceName: String,
												workStreetAddress: String,
												workMailingAddress: String,
												workCity: String,
												workState: String,
												workZipCode: String,
												workEmail: String,
												workTwitter: String,
												workJobPosition: String,
												workJobDescription: String,
											},
									}, //addresses end


						details:   { 
												
												hasChildren: Boolean,
												numberOfChildren: Number,
												militaryService: Boolean,
												militaryDetails: [],
												allowCoriCheck: Boolean,
												activities: [],
									},

						ifChild: 	{

												isChild: Boolean,
												childLikes: [],
												childParent1: String,
												childParent2: String,
									},

						
						pets:  		{     

										pets: Boolean,
										PetType: String,
										PetBreed: String,
										PetName: String,
									},

					marriage:       {
										partner1Married: Boolean,
										partner1CivilUnion: Boolean,
									}

					

		

				} // contact end

}); //end of personSchema

var Person = mongoose.model('Person', personSchema);

module.exports = Person;