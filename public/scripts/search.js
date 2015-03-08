// Client Side
$(document).on('ready', function(){


  var formMinAge = $('').val();
  var formMaxAge = $('contact.details.hasChildren').val();
  var formChildren = $('contact.details.hasChildren').val();
  var formPets = $('contact.details.pets').val();
  var formMilitary = $('contact.details.military').val();

   console.log("form items", formMinAge,formMaxAge,formChildren, formPets, formMilitary);

  var searchCriteria = {
      minAge: 18,
      maxAge: 70,
      children: true,
      pets: true,
      military: false
  };

$('#submitbutton').on('click', function(){
    //e.preventDefault();
    
    $.post('/compatiblecouples/search', searchCriteria, function(dataFromServer, status, jXHR){
       console.log("form items", formMinAge,formMaxAge,formChildren, formPets, formMilitary);
            return;
      });

}); // end Search Submit function






}); // End on Ready from Top