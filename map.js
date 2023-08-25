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

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();



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