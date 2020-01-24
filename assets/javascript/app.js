
function initialize(mood) {
    var atlanta = new google.maps.LatLng(33.753746, -84.38633);
  
    infowindow = new google.maps.InfoWindow();
  
    map = new google.maps.Map(document.getElementById("map"), {
      center: atlanta,
      zoom: 16
    });
  // The query
    var request = {
      location: atlanta,
      radius: "1500",
      type: [mood]
    };
  
    //customs markers
    var iconBase =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  
    var icons = {
      restaurant: {
        icon: iconBase + "parking_lot_maps.png"
      },
      park: {
        icon: iconBase + "library_maps.png"
      },
      nightclub: {
        icon: iconBase + "info-i_maps.png"
      }
    };
  // Api call
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }
  // call back 
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
    }
  }
  
  function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
      //icons[place.geometry.location.type].(inco)
    });
  
    google.maps.event.addListener(marker, "click", function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }
  // 
  $(document).ready(function() {
    //on click on a button get the mood
    $(".btn-generateimg").click(function(event) {
      
      event.preventDefault();
  
      var mood = $(this).data("info");
        
      var mapType;
      if (mood == "chill") {
        mapType = "park";
      } else if (mood == "dance") {
        mapType = "night-club";
      } else {
        mapType = "restaurant";
      }
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
  
      var map;
      var service;
      var infowindow;
  
      initialize(mapType);
      //AIzaSyCBnr6NpBsroUFg5Grwelp3oO5LzTl4MtY
    });
  });
  