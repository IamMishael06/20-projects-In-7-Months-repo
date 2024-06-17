
const address = "Tafawa Balewa Square, Lagos Island, Lagos, Nigeria"; 
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
  
