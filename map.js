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


function initMap() {
  // Define initial map options
  var mapOptions = {
    center: { lat: 6.441290, lng:  3.849760 }, // Coordinates for San Francisco
    zoom: 11, // Initial zoom level
    disableDefaultUI : false,
    maxZoom : 30,
    minZoom : 9,
  };

  // Create the map instance
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

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