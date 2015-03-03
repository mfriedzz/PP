// Angular Client Side

var searchApp = angular.module('searchApp', ['ngResource']);
  

// Data From Server

  searchApp.factory('Search', function($resource){
    // Define and return a resource connection
    return $resource(
      '/api/search/:id',
      {id: '@_id'}
      );

  }); // end of searchApp factory

  // List Controller

searchApp.controller('searchController', function($scope, Search){
  // Stick the data directly into the $scope
    $scope.search = Search.query();
});

  var Couple = function(Person,children){
    this.coupleDefined = coupleDefined;
    this.children = children;
  };

  Couple.prototype.render = function () {

    for (var key in this.coupleDefined){
      //console.log(key);
      if (this.coupleDefined[key] === "Rich")  {

      }
      
    }

    

  };

  Couple.prototype.search = function (minage, maxage, haschildren, haspets, militaryservice) {
      var self = this;

      // flag to see if passed function arguments have been thru 1 of the IF statements
      var flag = false;
    
    
        this.minage = minage;
        this.maxage = maxage;
        this.haschildren = haschildren;
        this.haspets = haspets;
        this.militaryservice = militaryservice;


     //call(this, minage, maxage, haschildren, haspets, militaryservice);

    // Filling in Couple Search Results
      $('.couplesearchresults').append('<br>' + " This couple, Number #  " + self.coupleDefined.coupleid + " , Matches you in the Following Categories:  "  + '<br>');
    
    //var results = _.filter (self, function(couple) {
        

           if  ((minage >= self.coupleDefined.partner1Age || minage >= self.coupleDefined.partner2Age)
            && (maxage <= self.coupleDefined.partner1Age || minage <= self.coupleDefined.partner2Age)) {
                 // answers.push = "Between " + self.coupleDefined.partner1Age + " Years Old"  + self.coupleDefined.partner2Age + " Years Old";
                  console.log("Within the Age limit");
                  $('.couplesearchresults').append('<br>' + " This couple is within your Age range " + " " + '<br>')
                               .append('<br>' + ' Couple ID ' +self.coupleDefined.coupleid + " " + '<br>')
                             .append(self.coupleDefined.partner1FirstName + " ")
                               .append(self.coupleDefined.partner1LastName + " " + '<br>')
                             .append(self.coupleDefined.partner2FirstName + " ")
                             .append(self.coupleDefined.partner2LastName + " ");

                             console.log("got here in Age Search", self.coupleDefined.partner1FirstName);
            flag = true;
           } // partner age if end
   
   console.log(" Has Children search whois being searched value", haschildren, self.coupleDefined.partner1HasChildren, self.coupleDefined.partner2HasChildren);
           if  ((haschildren === self.coupleDefined.partner1HasChildren) || (haschildren === self.coupleDefined.partner2HasChildren)){
            
            
              if (flag === false) {


                        
                      $('.couplesearchresults').append( '<br>' + ' Couple ID ' + self.coupleDefined.coupleid + " " + '<br>' +'<br>' )
                                .append(self.coupleDefined.partner1FirstName + " ")
                                  .append(self.coupleDefined.partner1LastName + " " + '<br>')
                                .append(self.coupleDefined.partner2FirstName + " ")
                                .append(self.coupleDefined.partner2LastName )
                                .append( '<br>' + " " + " Have Children " + haschildren + " " + '<br>' + '=======================' + '<br>');

                  console.log("got in has children 1", flag, self.coupleDefined.partner2FirstName, self.coupleDefined.partner2LastName)
                flag = true     

            } else  {
                $('.couplesearchresults').append('<br>' + " Have Children " + haschildren + '<br>' + '=======================' + '<br>')
                
          

            } // end if flag                      
                
           } // children end if 
      
      console.log(" Has Pets search whois being searched value", haspets, self.coupleDefined.partner1Pets, self.coupleDefined.partner2Pets)
           if  ((haspets === self.coupleDefined.partner1Pets) || (haspets === self.coupleDefined.partner2Pets)){

              if (flag === false) {
                    $('.couplesearchresults').append( '<br>' + " " + " Have Pets " + haspets + '<br>')
                               .append('<br>' + ' Couple ID ' + self.coupleDefined.coupleid + " " + '<br>')
                             .append(self.coupleDefined.partner1FirstName + " ")
                               .append(self.coupleDefined.partner1LastName + " " + '<br>')
                             .append(self.coupleDefined.partner2FirstName + " ")
                             .append(self.coupleDefined.partner2LastName + '<br>' + '=======================' + '<br>')
                  flag = true;
                  console.log("Have Pets 1", flag)           
                  } else {
                    $('.couplesearchresults').append('<br>' + " Have Pets " + haspets + '<br>' + '=======================' + '<br>')
              } // end if flag
                
           } // pets end if
      
      console.log(" In military search whois being searched value", militaryservice, self.coupleDefined.partner1MilitaryService, self.coupleDefined.partner2MilitaryService);    
           if  ((militaryservice === self.coupleDefined.partner1MilitaryService) || (militaryservice === self.coupleDefined.partner2MilitaryService)) {
                
              if (flag === false) {
                    $('.couplesearchresults').append( '<br>' + " " + " Served in the Military " + militaryservice + '<br>' + " ")
                               .append('<br>' + ' Couple ID ' + self.coupleDefined.coupleid + " " + '<br>')
                             .append(self.coupleDefined.partner1FirstName + " ")
                               .append(self.coupleDefined.partner1LastName + " " + '<br>')
                             .append(self.coupleDefined.partner2FirstName + " ")
                             .append(self.coupleDefined.partner2LastName + '<br>' + '=======================' + '<br>')
                    console.log("Military Veteran if 1")
              } else {
                $('.couplesearchresults').append('<br>' + " " + " Served in the Military " + militaryservice  + '<br>' + '=======================' + '<br>')
                console.log("military flag ", flag)
              } // end if flag
                             
                
           } // end military service
              

          // } // end of If

  //      }); // end of filter


       

  }; // end of Couple Prototype 

  Couple.prototype.addCouple = function() {

  };

   Couple.prototype.loggedInCouple = function(loggedInCouple){
      var self = this;
      //console.log("self", self);
      
    $('.profilestatistics').append('<br>' + '<br>' + 'Couple ID # ' + self.coupleDefined.coupleid + " " + '<br>')
                .append(self.coupleDefined.partner1FirstName + " ")
                  .append(self.coupleDefined.partner1LastName + " " + '<br>')
                .append(self.coupleDefined.partner2FirstName + " ")
                .append(self.coupleDefined.partner2LastName);

    

  };

=

// Beginning of Jquery  
$(document).on('ready', function() {

  

;

  
  //search on items inputted by user

    //var search = $(".search");
      //var items  = $("#childrenyes");

      $("#submitbutton").on("click", function(e){
        e.preventDefault();
        //return false;
        var minage = $('input[name=minage]').val();
        var maxage = $('input[name=maxage]').val();


        var haschildren = $('input[name=children]:checked').val();
        var haspets = $('input[name=pets]:checked').val();
        var militaryservice = $('input[name=militaryservice]:checked').val();
        
        
        

        couple2.search(minage, maxage, haschildren, haspets, militaryservice);
      
        couple3.search(minage, maxage, haschildren, haspets, militaryservice);
      

        

      });
       // location.reload();
      
 //  End Search on items

  
});  // end of Jquery Ready