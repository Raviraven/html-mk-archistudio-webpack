import '../scss/main.scss';

console.log('HELLO 🚀')

function initMap() {
    var uluru = {lat: 53.112874, lng: 23.146849};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
}

window.initMap = initMap;