// Client Side



  
console.log("Got here");


// Initialize the event listeners
$(document).on('ready', function(){


$('#submitbutton').on('click', function(e){
    e.preventDefault();
    
  var formMinAge = $('#minage').val();
  var formMaxAge = $('#maxage').val();
  var formChildrenYes = $('#childrenyes').val();
  var formChildrenNo = $('#childrenno').val();
  var formPetsYes = $('#petsyes').val();
  var formPetsNo = $('#petsno').val();
  var formMilitaryYes = $('#militaryyes').val();
  var formMilitaryNo = $('#militaryno').val();


       
    // var formChildren = function(){
    //     $("input:radio[name=children]").click(function() {
    //         var value = $(this).val();
    //         console.log("Value of Children from input click", value);
    //   })
    // };
   // $('input:radio[name=sex]:checked').val();

    var formChildren = $("input:radio[name=children]:checked").val();

    var formPets = $("input:radio[name=pets]:checked").val();

    var formMilitary = $("input:radio[name=militaryservice]:checked").val();


  

  var searchCriteria = {
      minAge: formMinAge,
      maxAge: formMaxAge,
      children: formChildren,
      pets: formPets,
      military: formMilitary
  };

  //console.log("form items not post", formMinAge,formMaxAge,formChildrenYes,formChildrenNo, formPetsYes, formPetsNo, formMilitaryYes, formMilitaryNo);
  //console.log("form items Search Criteria before post ", searchCriteria.minAge, searchCriteria.maxAge,
  //              searchCriteria.children, searchCriteria.pets, searchCriteria.military);

    $.post('/compatiblecouples/search', searchCriteria, 
            function(dataFromServer, status, jXHR){
     
      // Jquery for Post

      console.log("form items from Post", searchCriteria, dataFromServer);

      console.log('Post data', dataFromServer.firstName);

          // $('#searchresult').append( '<li>' + dataFromServer.firstname + dataFromServer.lastname + 
          //   + dataFromServer.age + dataFromServer.hasChildren + dataFromServer.haspets
          //   + dataFromServer.militaryService + '<li>');
         var result = dataFromServer.map(function (result) { 
                    return  $('.couplesearchresults').append( '<a class="jMyLink">' + '<li>' + result.contact.name.firstName + result.contact.name.lastName + 
                      result.contact.details.hasChildren + result.contact.pets.pets  + result.contact.details.militaryService +
                      result.contact.age.age + '<li>' + '</a>');
                                        
                                          });  
  

          //$('.couplesearchresults').append( '<li>' + result.contact.name.firstName + result.contact.name.lastName + '<li>');
            //return;
      });

}); // end Search Submit function






}); // End on Ready from Top