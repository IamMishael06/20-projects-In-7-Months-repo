// MAP API FOR TRACKING ORDER
(function (window, google) {
    // map options
    var mapArea = document.getElementById('map-canvas')
    var options = {
        center :{
            lat:6.441290,
            lng: 3.849760
        },
        zoom : 11,
        disableDefaultUI : false,
        maxZoom : 15,
        minZoom : 9,
        zoomControlOptions:{
            position : google.maps.ControlPosition.LEFT_BOTTOM,
            style: google.maps.ZoomControlStyle.SMALL

        },
        panControlOptions :{
            position : google.mapS.ControlPosition.RIGHT_BOTTOM
        }
    }
    
    // map
    map = new google.maps.Map(mapArea, options)
}(window, google))
// MAP API FOR TRACKING ORDER

