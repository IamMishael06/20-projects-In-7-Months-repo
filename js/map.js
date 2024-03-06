// const address = "";
// const address = "Adetokunbo Ademola Street, Victoria ";
const address = "Tafawa Balewa Square, Lagos Island, Lagos, Nigeria"; 
// A well-known address for testing
// const address = document.querySelector('.address').textContent;
console.log(address)
// Construct the API URL with the address
const nominatimGeocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

// Make an HTTP GET request to the Nominatim API
fetch(nominatimGeocodeUrl)
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      // Parse the response data to extract latitude and longitude
      const latitude = parseFloat(data[0].lat);
      const longitude = parseFloat(data[0].lon);
      console.log(latitude, longitude)
      // Call initMap with the latitude and longitude
      initMap(latitude, longitude);
    } else {
      console.error("Unable to geocode address.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
  function initMap(latitude, longitude) {
    var mapOptions = {
      center: { lat: 6.441290, lng: 3.849760 },
      zoom: 10,
      disableDefaultUI: false,
      maxZoom: 30,
      minZoom: -10,
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    // Add marker for the fixed address
    let fixedAddressMarkerOptions = {
      position: new google.maps.LatLng(6.441290, 3.849760),
      map: map,
      title: 'MarsFood Address',
      label:'MarsFood',
      icon :'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    };
    let fixedAddressMarker = new google.maps.Marker(fixedAddressMarkerOptions);
  
    // Check if latitude and longitude are available and add a user marker with a custom color
    if (latitude && longitude) {
      // Define the color for the user marker (e.g., red)
      const userMarkerColor = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
  
      // Create a custom icon for the user marker with the specified color
      const userMarkerIcon = {
        path: google.maps.SymbolPath.DEFAULT,
        fillColor: userMarkerColor,
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 10 // Adjust the scale as needed
      };
  
      let userMarkerOptions = {
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        optimzed: false,
        animation: google.maps.Animation.Bounce, 
        title: 'User Address',
        // draggable : true,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' // Set the custom icon
      };
      let userMarker = new google.maps.Marker(userMarkerOptions);
  
      // Calculate and display the distance between the two markers
      const userLatLng = userMarker.getPosition();
      const fixedAddressLatLng = fixedAddressMarker.getPosition();
      const distance = google.maps.geometry.spherical.computeDistanceBetween(userLatLng, fixedAddressLatLng);
      const speedInMetersPerSecond = 3.33; // Speed in meters per second
  
      // Calculate time in seconds
      const timeInSeconds = distance / speedInMetersPerSecond;
  
      const deliveryTimeElement = document.getElementById('delivery-time');
  
      if (timeInSeconds <= 3600) {
        const minutes = Math.floor(timeInSeconds / 60);
        console.log('Time: ' + minutes + ' minutes');
        deliveryTimeElement.textContent = 'Arrives in: ' + minutes + ' minutes';
      } else {
        const hours = Math.floor(timeInSeconds / 3600);
        const remainingMinutes = Math.floor((timeInSeconds % 3600) / 60);
        console.log('Time: ' + hours + ' hours ' + remainingMinutes + ' minutes');
        deliveryTimeElement.textContent = 'Arrives in: ' + hours + ' hours ' + remainingMinutes + ' minutes';
      }
    }
  
    // You can add more markers or perform other actions here
  }
  
  

// Log the userAddress to check if it's correct

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