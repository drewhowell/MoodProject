var APPKey = "&app_key=19819473f0fe510cfaaed9c5f1cf5bd1";
var APPId = "&app_id=b7350af4";
var celebratory = "party";
var chill = "tapas";
var dance = "drinks";

// Here we are building the URLs we need to query the database 

var queryURLCelebratory = "https://api.edamam.com/search?q=" + celebratory + APPId + APPKey;
var queryURLChill = "https://api.edamam.com/search?q=" + chill + APPId + APPKey;
var queryURLDance = "https://api.edamam.com/search?q=" + dance + APPId + APPKey;

//listen for celebratory button clicked and call a function

document.getElementById("happy-state-cta").addEventListener("click", function(){

// Here we run our AJAX call 

$.ajax({
    url: queryURLCelebratory,
    method: "GET"
})// We store all of the retrieved data inside of an object called "response"
.then(function(response) {
    console.log(queryURLCelebratory);
    console.log(response);

// Transfer content to HTML
$(".recipe1Label").html(response.hits[0].recipe.label);
$(".recipe1URL").html("<a href=" + ' " ' + response.hits[0].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
$(".recipe1Image").html("<img src=" + ' " ' + response.hits[0].recipe.image + ' " ' + "></img>")

$(".recipe2Label").html(response.hits[1].recipe.label);
$(".recipe2URL").html("<a href=" + ' " ' + response.hits[1].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
$(".recipe2Image").html("<img src=" + ' " ' + response.hits[1].recipe.image + ' " ' + "></img>")

$(".recipe3Label").html(response.hits[2].recipe.label);
$(".recipe3URL").html("<a href=" + ' " ' + response.hits[2].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
$(".recipe3Image").html("<img src=" + ' " ' + response.hits[2].recipe.image + ' " ' + "></img>")

$(".recipe4Label").html(response.hits[5].recipe.label);
$(".recipe4URL").html("<a href=" + ' " ' + response.hits[5].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
$(".recipe4Image").html("<img src=" + ' " ' + response.hits[5].recipe.image + ' " ' + "></img>")

$(".recipe5Label").html(response.hits[6].recipe.label);
$(".recipe5URL").html("<a href=" + ' " ' + response.hits[6].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
$(".recipe5Image").html("<img src=" + ' " ' + response.hits[6].recipe.image + ' " ' + "></img>")

$(".recipe6Label").html(response.hits[7].recipe.label);
$(".recipe6URL").html("<a href=" + ' " ' + response.hits[7].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
$(".recipe6Image").html("<img src=" + ' " ' + response.hits[7].recipe.image + ' " ' + "></img>")


});

});

//listen for chill button clicked and call a function

document.getElementById("violet-state-cta").addEventListener("click", function(){

    // Here we run our AJAX call 
    
    $.ajax({
        url: queryURLChill,
        method: "GET"
    })// We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
        console.log(queryURLChill);
        console.log(response);
    
    // Transfer content to HTML
    $(".recipe1Label").html(response.hits[0].recipe.label);
    $(".recipe1URL").html("<a href=" + ' " ' + response.hits[0].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
    $(".recipe1Image").html("<img src=" + ' " ' + response.hits[0].recipe.image + ' " ' + "></img>")
    
    $(".recipe2Label").html(response.hits[1].recipe.label);
    $(".recipe2URL").html("<a href=" + ' " ' + response.hits[1].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
    $(".recipe2Image").html("<img src=" + ' " ' + response.hits[1].recipe.image + ' " ' + "></img>")
    
    $(".recipe3Label").html(response.hits[2].recipe.label);
    $(".recipe3URL").html("<a href=" + ' " ' + response.hits[2].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
    $(".recipe3Image").html("<img src=" + ' " ' + response.hits[2].recipe.image + ' " ' + "></img>")
    
    $(".recipe4Label").html(response.hits[5].recipe.label);
    $(".recipe4URL").html("<a href=" + ' " ' + response.hits[5].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
    $(".recipe4Image").html("<img src=" + ' " ' + response.hits[5].recipe.image + ' " ' + "></img>")
    
    $(".recipe5Label").html(response.hits[6].recipe.label);
    $(".recipe5URL").html("<a href=" + ' " ' + response.hits[6].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
    $(".recipe5Image").html("<img src=" + ' " ' + response.hits[6].recipe.image + ' " ' + "></img>")
    
    $(".recipe6Label").html(response.hits[7].recipe.label);
    $(".recipe6URL").html("<a href=" + ' " ' + response.hits[7].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
    $(".recipe6Image").html("<img src=" + ' " ' + response.hits[7].recipe.image + ' " ' + "></img>")
    
    
    });
    
    });

//listen for dance button clicked and call a function

document.getElementById("orange-state-cta").addEventListener("click", function(){

    // Here we run our AJAX call
    
    $.ajax({
        url: queryURLDance,
        method: "GET"
    })// We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
        console.log(queryURLDance);
        console.log(response);
    
    // Transfer content to HTML
    $(".recipe1Label").html(response.hits[0].recipe.label);
    $(".recipe1URL").html("<a href=" + ' " ' + response.hits[0].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
    $(".recipe1Image").html("<img src=" + ' " ' + response.hits[0].recipe.image + ' " ' + "></img>")
    
    $(".recipe2Label").html(response.hits[1].recipe.label);
    $(".recipe2URL").html("<a href=" + ' " ' + response.hits[1].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
    $(".recipe2Image").html("<img src=" + ' " ' + response.hits[1].recipe.image + ' " ' + "></img>")
    
    $(".recipe3Label").html(response.hits[2].recipe.label);
    $(".recipe3URL").html("<a href=" + ' " ' + response.hits[2].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
    $(".recipe3Image").html("<img src=" + ' " ' + response.hits[2].recipe.image + ' " ' + "></img>")
    
    $(".recipe4Label").html(response.hits[5].recipe.label);
    $(".recipe4URL").html("<a href=" + ' " ' + response.hits[5].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
    $(".recipe4Image").html("<img src=" + ' " ' + response.hits[5].recipe.image + ' " ' + "></img>")
    
    $(".recipe5Label").html(response.hits[6].recipe.label);
    $(".recipe5URL").html("<a href=" + ' " ' + response.hits[6].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
    $(".recipe5Image").html("<img src=" + ' " ' + response.hits[6].recipe.image + ' " ' + "></img>")
    
    $(".recipe6Label").html(response.hits[7].recipe.label);
    $(".recipe6URL").html("<a href=" + ' " ' + response.hits[7].recipe.shareAs + ' " ' + ">" + "Click here for recipe" + "</a>");
    $(".recipe6Image").html("<img src=" + ' " ' + response.hits[7].recipe.image + ' " ' + "></img>")
    
    
    });
    
    });