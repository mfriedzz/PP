// Client Side




// Initialize the event listeners
$(document).on('ready', function(){
   
   console.log("Got to search.js on Ready function");

$('#submitbutton').on('click', function(e){
      e.preventDefault();
    
  console.log("Got to search.js submit button");
  
  var formMinAge = $('#minage').val();
  var formMaxAge = $('#maxage').val();
  var formChildrenYes = $('#childrenyes').val();
  var formChildrenNo = $('#childrenno').val();
  var formPetsYes = $('#petsyes').val();
  var formPetsNo = $('#petsno').val();
  var formMilitaryYes = $('#militaryyes').val();
  var formMilitaryNo = $('#militaryno').val();


    

    var formChildren = $("input:radio[name=children]:checked").val();

    var formPets = $("input:radio[name=pets]:checked").val();

    var formMilitary = $("input:radio[name=militaryservice]:checked").val();

   
    var formState = $('select[name=state][id=state]').val();
    
    // var formState = $("#state").val();

    var formDistance = $('select[name=miles]').val();

    var loggedInUser = $('#useremail').val();

  

    var searchCriteria = {
        minAge: formMinAge,
        maxAge: formMaxAge,
        children: formChildren,
        pets: formPets,
        military: formMilitary,
        state: formState,
        distance: formDistance,
        loggedInUser: loggedInUser
    };

  console.log("form items not post", searchCriteria);
  //console.log("form items Search Criteria before post ", searchCriteria.minAge, searchCriteria.maxAge,
  //              searchCriteria.children, searchCriteria.pets, searchCriteria.military);

    $.post('/compatiblecouples/search', searchCriteria, 
            function(dataFromServer){
     
      // Jquery for Post

      // console.log("form items from Post", searchCriteria, dataFromServer);

      console.log('Data From Server ', dataFromServer);

         
         $(".couplesearchresults").empty();
         
         var mappedResultspuredata = dataFromServer.results.map(function (result1)
                 { 
                  var flag = false;
   
   // original map command
   // $('.couplesearchresults').append("<li>" + "<a href='/compatiblecouplesearchdetails/" + result._id + "'>" + result.contact.name.firstName + result.contact.name.lastName + 
   //                    result.contact.details.hasChildren + result.contact.pets.pets  + result.contact.details.militaryService +
   //                    result.contact.age.age + result.coupledWith.coupleId + '</a>' + "</li>");   

          // $('.couplesearchresults').append("<li>" + "<a href='/compatiblecouplesearchdetails/" + result._id + "'>" 
          //     + result.contact.name.firstName + result.contact.name.lastName  + '</a>' + "</li>");                       
           // $('.couplesearchresults').text("Couple: ");            
            $('.couplesearchresults').append("<li>" 
            + "<a href='/compatiblecouplesearchdetails/" + result1._id + "'>" 
              + result1.contact.name.firstName + result1.contact.name.lastName  + '</a>' + "</li>");

             
                
                  dataFromServer.coupleResults.map(function (result2)
                     { 
                      if (flag == false) //&& ( result2.coupledWith.coupleId == result1.coupledWith.coupleId))
                      {
                          // $('.couplesearchresults').append([coupleResults]);
                            $('.couplesearchresults').append( 
                              result2.matchedOn.matchChild + result2.matchedOn.matchPets + result2.matchedOn.matchMilitary 
                            + result2.matchedOn.matchAge + result2.matchedOn.MatchState + result2.matchedOn.Distance );  
                            flag = true;  
                      } //else
                      // {
                      //     $('.couplesearchresults').append("<li>" 
                      //     + result1.contact.name.firstName + result1.contact.name.lastName  + "</li>");
                      // } // end of if  else flag                  
                     }) // end of  mapped result how matched
                  
                  }); // end of  mapped result   pure data


          

// firstname: person.contact.name.firstName,
//                                 lastName: person.contact.name.lastName,
//                                 coupleId: person.coupledWith.coupleId,
//                                 uniqueId: person._id,
//                                 matchedOn : {
//                                         matchChild:   matchedOnChildren,
//                                         matchPets:    matchedOnPets,
//                                         matchMilitary:  matchedOnMilitary, 
//                                         matchAge:       matchedOnAge,
//                                         matchState:     person.contact.addresses.home.homeState,
//                                         matchDistance:  searchCriteria.distance 
//                                       }
      }); // end of post for search
    // $.post('compatiblecouplessearchdetails', function( dataFromServer)
    //   {

    //   }); // end of post for couples children search

   
    

}); // end Search Submit function


// Handle Details views 
    
   
    $('#selectedcouple').change(function(e) 
    {
      // State has changed to checked/unchecked.
       e.preventDefault();
       if ($(this).is(':checked'))
         {

           $.post('/compatiblecouples/' + ($('#coupleid').val()), 
                function(data)
                {

                    console.log("Clicked");
                })
        }

    });

  // });
  $('#finishdetails').on('click', function(e){
    e.preventDefault();

    console.log("Finished details");
    
   
  });
    
// Handle Couple Meetup Button Clicked
    // $('#wheretomeet').on('click', function(e){
    //   e.preventDefault();
    //   $.get('/couplemeetup', function(data){
    //       alert("where to meet", data);
    //   });
    //     // $.post('/couplemeetup)

    //   });

}); // End document on Ready from Top