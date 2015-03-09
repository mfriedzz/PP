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


 
    var formChildren = function(){
        $("input:radio[name=children]").click(function() {
            var value = $(this).val();
            console.log("Value of Children from input click", value);
      })
    };

    var formPets = function() {
         $("input:radio[name=pets]").click(function() {
            var value = $(this).val();
            console.log("Value of Pets from input click", value);
      })
    };

   var formMilitary =  function(){
        $("input:radio[name=militaryservice]").click(function() {
            var value = $(this).val();
            console.log("Value of Military from input click", value);
      })
    };

  

  

  // var searchCriteria = {
  //     minAge: 18,
  //     maxAge: 70,
  //     children: true,
  //     pets: true,
  //     military: false
  // };

  var searchCriteria = {
      minAge: formMinAge,
      maxAge: formMaxAge,
      children: formChildren,
      pets: formPets,
      military: formMilitary
  };

  console.log("form items not post", formMinAge,formMaxAge,formChildrenYes,formChildrenNo, formPetsYes, formPetsNo, formMilitaryYes, formMilitaryNo);

    $.post('/compatiblecouples/search', searchCriteria, function(dataFromServer, status, jXHR){
     
      console.log("form items from Post", formMinAge,formMaxAge,formChildren, formPets, formMilitary);

            return;
      });

}); // end Search Submit function






}); // End on Ready from Top