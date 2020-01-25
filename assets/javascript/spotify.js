
 
  function requestMusic(Key){


    var queryURL = "https://itunes.apple.com/search?term=" + Key + "&limit=25";
  

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
$("#song-cards").empty()
    var responseObject = JSON.parse(response);
   for (var i = 0; i < responseObject.results.length; i++) {

      
      
      //use jquery to create a new card with .composer, .song, and .album elements inside
     // $("#song-cards").append(responseObject.results[i].artistName);
     //$("#song-cards").append(responseObject.results[i].collectionCensoredName);
      $("#song-cards").append("<br>"+"<br>"+"<img src="+ responseObject.results[i].artworkUrl100+">");
   $("#song-cards").append("<a class=mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect href="+responseObject.results[i].trackViewUrl+">"+responseObject.results[i].trackName+"</a>");

     
   
   }
  });
};
    
 
 $(".btn-generateimg").on("click", function(){
   var button = $(this).text();

   if(button === "Chill"){
requestMusic("reggae")

   
           }

 })
 $(".btn-generateimg").on("click", function(){
  var button = $(this).text();
  

  
  if(button === "Dance"){
   requestMusic("pop")
   }
      

})
$(".btn-generateimg").on("click", function(){
  var button = $(this).text();

      if(button === "Celebratory"){
       requestMusic("party")
          }

})
 
