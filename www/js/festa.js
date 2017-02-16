$(document).ready(function(){

var counter = 0;
var counter2 = 0;
var eventArray = [];
var guestArray = [];
//var rand = Math.floor(Math.random() * 30) + 1;

function changeLocation(){

   window.location.assign("set up second page html once grid clicked");
}; 

function goBack(){
  localStorage.clear();
   window.location.assign("index.html");

};


$('#page2').on('keyup keypress', function(e) {
 var keyCode = e.keyCode || e.which;
 if (keyCode === 13) { 
   e.preventDefault();
   return false;
 }
});

// set up search for possible future searched events
// $("#searchBtn").on("click",function(){
//     var search = $("#search").val()
//     localStorage.setItem("searchTerm", search)

// console.log(search)

var counter = 0;
$.ajax({ // begin ajax for event and guest list search

         url: "https://www.eventbriteapi.com/v3/users/me/owned_events/?token=CGRYW6NXCFHP2ZBUUVTNMAKT5N25652QETXLPP5FFHRKQL3YED",
         type: "GET",
         async: false,
         beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', 'CGRYW6NXCFHP2ZBUUVTNMAKT5N25652QETXLPP5FFHRKQL3YED');},
      }).done(function(result){
        console.log(result)
         localStorage.setItem("guestName", JSON.stringify(result.results));
         
         counter++

      if(counter === 1){
         
         for(var i = 0; i < result.results.length; i++){
         $.ajax({ // begin ajax for personal event search
         url: 'https://www.eventbriteapi.com/v3/users/me/owned_events/?token=CGRYW6NXCFHP2ZBUUVTNMAKT5N25652QETXLPP5FFHRKQL3YED',
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', 'CGRYW6NXCFHP2ZBUUVTNMAKT5N25652QETXLPP5FFHRKQL3YED');},
          }).done(function(event){

         
             console.log(event);
            for(var t =0; t < event[0].steps.length; t++){

                eventArray.push(event[0].steps[t].step);
            }
              console.log(eventArray)
            localStorage.setItem("events", JSON.stringify(eventArray));

          });// end event ajax
          } //end for


      for(var i = 0; i < result.results.length; i++){ // begin for loop

                  $.ajax({
                     url:"https://www.eventbriteapi.com/v3/users/me/owned_event_attendees/?token=CGRYW6NXCFHP2ZBUUVTNMAKT5N25652QETXLPP5FFHRKQL3YED",
                     type: "GET",
                     async: false,
                      beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', 'CGRYW6NXCFHP2ZBUUVTNMAKT5N25652QETXLPP5FFHRKQL3YED');},
                    }).done(function(guest){
                     console.log(guest)
                    
                      for(var g = 0; g < guests.invitedAttendees.length; g++){

                      eventArray.push(ingredients.invitedAttendees[g].originalString); 
                    

                       }// end for loop for event guests

                       console.log(guestArray) 
                       localStorage.setItem("guestList", JSON.stringify(guests));
                       localStorage.setItem("picture",JSON.stringify(guests.image));
                            $.ajax({ // begin internal ajax call for event guests

                              url: 'https://www.eventbriteapi.com/v3/users/me/owned_event_attendees/?token=CGRYW6NXCFHP2ZBUUVTNMAKT5N25652QETXLPP5FFHRKQL3YED',
                              type: "POST",
                              data: {
                                    defaultCss: false,
                                    guestList:eventArray.join("\n")  , // try putting the actual guest name here 
                                    servings: 4
                                 },
                              beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', 'CGRYW6NXCFHP2ZBUUVTNMAKT5N25652QETXLPP5FFHRKQL3YED');},
                              }).done(function(guest){
                                 
                              // console.log(eventArray[1] + " guest")
                              // console.log(guest);

                              localStorage.setItem("guest",JSON.stringify(guest))
                           
                        }); // end internal ajax call for guest list

                     }// end for loop for guest list


      } // end if


  });// end big ajax




