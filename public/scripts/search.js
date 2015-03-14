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

    
    var formState = $("#state").val();

    var formDistance = $("#distancefromhome").val();

  

    var searchCriteria = {
        minAge: formMinAge,
        maxAge: formMaxAge,
        children: formChildren,
        pets: formPets,
        military: formMilitary,
        state: formState,
        distance: formDistance
    };

  console.log("form items not post", searchCriteria);
  //console.log("form items Search Criteria before post ", searchCriteria.minAge, searchCriteria.maxAge,
  //              searchCriteria.children, searchCriteria.pets, searchCriteria.military);

    $.post('/compatiblecouples/search', searchCriteria, 
            function(dataFromServer, status, jXHR){
     
      // Jquery for Post

      console.log("form items from Post", searchCriteria, dataFromServer);

      console.log('Post data', dataFromServer.firstName);

         
         $(".couplesearchresults").empty();
          
         var result = dataFromServer.map(function (result)
                 { 
                    console.log("result", result);
                    return  $('.couplesearchresults').append( "<a href='/compatiblecouplesearchresult/" + result._id + " ' class='searchresults' class='expand'>" 
                      + '<li>' + result.contact.name.firstName + result.contact.name.lastName + 
                      result.contact.details.hasChildren + result.contact.pets.pets  + result.contact.details.militaryService +
                      result.contact.age.age + result.coupledWith.coupleId + '<li>' + '</a>');

                                        
                  }); // end of result  


            //return;
            // $( '.couplesearchresults' ).each(function(){
            //      this.reset();
            //  });
      }); // end of post for search

    
    

}); // end Search Submit function


// Handle Details views 



}); // End document on Ready from Top