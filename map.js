// // MAP API FOR TRACKING ORDER
// (function(window,google){
// // map options
// var options = {
//            center :{
//                lat:6.441290,
//                lng: 3.849760
//            },
//            zoom : 11,
// }
// var element = document.getElementById('map-canvas')
// // map
// map = new google.maps.Map(element, options);
// }(window,google));
// // MAP API FOR TRACKING ORDER
var map;
let address = document.getElementById('address')
// const addressValue = address.textContent
console.log(address)
function initMap() {
  var mapOptions = {
    center: { lat: 6.441290, lng: 3.849760 },
    zoom: 11,
    disableDefaultUI: false,
    maxZoom: 30,
    minZoom: 9,
  };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Add marker for the second address
  var secondAddressLatLng = new google.maps.LatLng(6.441290, 3.849760);
  var secondAddressMarker = new google.maps.Marker({
    position: secondAddressLatLng,
    map: map,
    title: 'Second Address'
  });

  // Geocode the fixed address and add marker on page load
  const addressText = document.getElementById('address').textContent;
console.log(addressText)
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': addressText }, function(results, status) {
    if (status === 'OK') {
      var userLatLng = results[0].geometry.location;

      // Add marker for the user's address
      var userMarker = new google.maps.Marker({
        position: userLatLng,
        map: map,
        title: 'User Address'
      });

      // Calculate and display the distance between the two markers
      var distance = google.maps.geometry.spherical.computeDistanceBetween(userLatLng, secondAddressLatLng);
      console.log('Distance between markers: ' + distance + ' meters');
    } else {
      console.error('Geocode was not successful for the following reason: ' + status);
    }
  });
}
// var map;
// const addressText = document.getElementById('address')
// const address = addressText.textContent
// console.log(address)
// function initMap() {
//   // Define initial map options
//   var mapOptions = {
//     center: { lat: 6.441290, lng:  3.849760 }, // Coordinates for San Francisco
//     zoom: 11, // Initial zoom level
//     disableDefaultUI : false,
//     maxZoom : 30,
//     minZoom : 9,
//   };

//   // Create the map instance
//    map = new google.maps.Map(document.getElementById('map'), mapOptions);
// }

// var geocoder = new google.maps.Geocoder();
//   geocoder.geocode({ 'address': address }, function(results, status) {
//     if (status === 'OK') {
//       var userLatLng = results[0].geometry.location;
      
      
//       // Now you can use the userLatLng to display a marker on the map
//       var userMarker = new google.maps.Marker({
//         position: userLatLng,
//         map: map,
//         title: 'User Address'
//       });
      
//       // You can also add a marker for the second address
//       var secondAddressLatLng = new google.maps.LatLng(6.441290, 3.849760);
//       var secondAddressMarker = new google.maps.Marker({
//         position: secondAddressLatLng,
//         map: map,
//         title: 'Second Address'
//       });

//       // Calculate and display the distance between the two markers
//       var distance = google.maps.geometry.spherical.computeDistanceBetween(userLatLng, secondAddressLatLng);
//       console.log('Distance between markers: ' + distance + ' meters');
//     } else {
//       console.error('Geocode was not successful for the following reason: ' + status);
//     }
//   });
//(function (window, google) {
    //     // map options
    //     var options = {
    //         center :{
    //             lat:6.441290,
    //             lng: 3.849760
    //         },
    //         zoom : 11,
    //         disableDefaultUI : false,
    //         maxZoom : 15,
    //         minZoom : 9,
    //         zoomControlOptions:{
    //             position : google.maps.ControlPosition.LEFT_BOTTOM,
    //             style: google.maps.ZoomControlStyle.SMALL
    
    //         },
    //         panControlOptions :{
    //             position : google.mapS.ControlPosition.RIGHT_BOTTOM
    //         }
    //     }
    //     var mapArea = document.getElementById('map-canvas'),
    //     // map
    //     map = new google.maps.Map(mapArea, options)
    // }(window, google))