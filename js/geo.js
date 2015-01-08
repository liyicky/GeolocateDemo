var form = document.getElementById('geolocateform');
var input = document.getElementById('liyput');
var options = {};
$("body").append("<div id='map-canvas'></div>");
var canvas = document.getElementById('map-canvas');


autocomplete = new google.maps.places.Autocomplete(input, options);
geocoder = new google.maps.Geocoder();
function initialize() {
  var loc = document.getElementById('liyput').value
  form.remove();

  var mapOptions = {
      zoom: 16,
      disableDefaultUI: true
    };
    var map = new google.maps.Map(canvas, mapOptions);
    geocoder.geocode( { 'address': loc }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert("Failed");
      }
  });
}
