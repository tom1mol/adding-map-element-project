api AIzaSyDDHHyac2SiOYPNYxXMK7rqJjnB8nCaaxE


links:

maps:

adding the map element                          https://youtu.be/5UlJ7Eic44M
getting the API key                             https://youtu.be/5vATo6DcerA
referencing the js files                        https://youtu.be/UVPq2Agf6rk
rendering the map                               https://youtu.be/9W9LfznPMfQ
adding markers                                  https://youtu.be/SlRaPAWbPBU
moving the code into its own script             https://youtu.be/94KO_Br-dwI
one last thing                                  https://youtu.be/o62AVNa85uw
github API:

github form                                     https://youtu.be/M_WahXaO6ec
initial data retrieval setup                    https://youtu.be/vT_xDMlP1LA
making promises                                 https://youtu.be/mR0eu2zF0KI
rendering user data                             https://youtu.be/2dfYlpQLgXs
getting the repo data                           https://youtu.be/g7fhFS1pGoI
rendering repo data                             https://youtu.be/B0SiD6AGTWQ





https://developer.mapquest.com/plan_purchase/steps/business_edition/business_edition_free/register

consumer key:       GabSFpoJ2S7a4VZR8B6pqQpgRxfgBtIN
consumer secret:    5w5Ih6WdfHMpiRXk

window.onload = function() {
    L.mapquest.key = 'put_your_key_here';
    var baseLayer = L.mapquest.tileLayer('map');
    var map = L.mapquest.map(document.getElementById("map"), {
        center: L.latLng(-37.82, 175.24),
        layers: baseLayer,
        zoom: 8
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 },
    ];

    var markers = locations.map(function(location, i) {
        return new L.mapquest.marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new markerCluster(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    });

    var markers = L.markerClusterGroup();
    for (var i = 0; i < locations.length; i++) {
        var addressPoint = locations[i];
        var title = addressPoint[2];
        var marker = L.marker(new L.LatLng(addressPoint[0], addressPoint[1]), {
            title: title,
            icon: L.mapquest.icons.marker()
        });
        marker.bindPopup(title);
        markers.addLayer(marker);
    }
    map.addLayer(markers);
};