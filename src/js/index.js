import '../scss/main.scss';

console.log('HELLO 🚀')

window.initMap = initMap;

function initMap() {
    var uluru = {lat: 53.112874, lng: 23.146849};
    var map = new google.maps.Map(
        document.getElementById('gmap'), {zoom: 15, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
}