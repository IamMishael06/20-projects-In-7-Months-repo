const apiKey = "4103dee1eb0b0760b4bcfb316ba54e2f";
// '1234 Elm Street, Springfield, Anytown, USA';
let userAddress = 'cadogan place estate osapa london, lagos'
console.log(userAddress)
// let userAddress = document.getElementById('address').textContent;
console.log(userAddress)
const query = userAddress;
const apiUrl = `http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${encodeURIComponent(query)}`;

let latitude; // Define these as global variables
let longitude;

async function getGeolocation() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)
    if (data && data.data && data.data.length > 0) {
      // Assuming the first result is the most relevant
      const firstResult = data.data[0];
      latitude = firstResult.latitude; // Assign values to the global variables
      longitude = firstResult.longitude;
      
      // Now you can use the latitude and longitude
      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);
      
      initMap(); // Call initMap after obtaining the coordinates
    } else {
      console.error('No results found for the provided address.');
    }

  } catch (error) {
    console.log('Error:', error);
  }
}

getGeolocation();

var map;

function initMap() {
  var mapOptions = {
    center: { lat: 6.441290, lng: 3.849760 },
    zoom: 12,
    disableDefaultUI: false,
    maxZoom: 30,
    minZoom: -10,
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Add marker for the fixed address
  let fixedAddressMarkerOptions = {
    position: new google.maps.LatLng(6.441290, 3.849760),
    map: map,
    title: 'Fixed Address'
  };
  let fixedAddressMarker = new google.maps.Marker(fixedAddressMarkerOptions);

  // Check if latitude and longitude are available and add a user marker
  if (latitude && longitude) {
    let userMarkerOptions = {
      position: new google.maps.LatLng(latitude, longitude),
      map: map,
      title: 'User Address'
    };
    let userMarker = new google.maps.Marker(userMarkerOptions);
  }
  // You can add more markers or perform other actions here
}

// Log the userAddress to check if it's correct
console.log('User Address:', userAddress);

//       // Calculate and display the distance between the two markers
//       var distance = google.maps.geometry.spherical.computeDistanceBetween(userLatLng, secondAddressLatLng);
//       console.log('Distance between markers: ' + distance + ' meters');
//     } else {
//       console.error('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }
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