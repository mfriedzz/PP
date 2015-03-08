// Client Side



  
console.log("Got here");


// Initialize the event listeners
$(document).on('ready', function(){


  var formMinAge = $('#minage').val();
  var formMaxAge = $('#maxage').val();
  var formChildrenYes = $('#childrenyes').val();
  var formChildrenNo = $('#childrenno').val();
  var formPetsYes = $('#petsyes').val();
  var formPetsNo = $('#petsno').val();
  var formMilitaryYes = $('#militaryyes').val();
  var formMilitaryNo = $('#militaryno').val();

   console.log("form items", formMinAge,formMaxAge,formChildrenYes,formChildrenNo, formPetsYes, formPetsNo, formMilitaryYes, formMilitaryNo);

  var searchCriteria = {
      minAge: 18,
      maxAge: 70,
      children: true,
      pets: true,
      military: false
  };




$('#submitbutton').on('click', function(e){
    //e.preventDefault();
    
    $.post('/compatiblecouples/search', searchCriteria, function(dataFromServer, status, jXHR){
      // console.log("form items", formMinAge,formMaxAge,formChildren, formPets, formMilitary);
      console.log("form items", formMinAge,formMaxAge,formChildrenYes,formChildrenNo, formPetsYes, formPetsNo, formMilitaryYes, formMilitaryNo);

            return;
      });

}); // end Search Submit function






}); // End on Ready from Top