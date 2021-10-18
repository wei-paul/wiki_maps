// Client facing scripts here
let map2, newMarker, markerLocation;
// let markerButton = false;

$(document).ready(function() {
  var vancouver = L.map('map2').setView([49.2827, -123.1207], 10);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZm9ndGhpZWYiLCJhIjoiY2t1dWZyb3ZvNXlvMjJvbno5ODJ0ejB0MiJ9.f4puqeLncdbCee2rxc5jNA'
  }).addTo(vancouver);


  // vancouver.on('click', addMarker);
  // function addMarker(temp) {
  //   if (markerButton) {
  //     let newMarker = new L.marker(temp.latlng).addTo(vancouver);
  //     markerButton = false;
  //   }
  // }

  // $(".test-button").on("click", () => {
  //   console.log(markerButton);
  //   markerButton = true;
  // });

  // while (markerButton) {
  //   cursor
  // }
});
