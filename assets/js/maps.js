// var APIKey = "AIzaSyDDHHyac2SiOYPNYxXMK7rqJjnB8nCaaxE"; 
        function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -70.134766
                }
            });
            
            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";      //labels for markers

            var locations = [                               //array of locations containing objects composed of lat and long
                { lat: 40.785091, lng: -73.968285 }, 
                { lat: 41.084045, lng: -73.874245 },
                { lat: 40.754932, lng: -73.984016 }
            ];
            
             var markers = locations.map(function(location, i) {  //pass in location and index
                 return new google.maps.Marker({
                     position: location,        //long and lat
                     label: labels[i % labels.length]
                 });
             });                                             //iterating over those locations and applying labels to them
             
             var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
             
        }
