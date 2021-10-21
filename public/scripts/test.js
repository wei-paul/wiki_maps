let map2
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


  const urlParams = new URLSearchParams(window.location.search);
  const map_id = urlParams.get('map_id');
  console.log({map_id});

  $.ajax({
    type: "GET",
    url: `/api/maps/${map_id}`,
  })
  .done((res) => {
    console.log(res)
  })

  for (element in res) {

  }

  let geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
        "name": "Test name",
        "popupContent": "Test description",
        "popupimageURL": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-123.1207, 49.2827]
        }
      },
      {
        "type": "Feature",
        "properties": {
        "name": "Test name",
        "popupContent": "Test2",
        "popupimageURL": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-122.3045, 49.0504]
        }
      }
    ]
  };



  geojsonLayer = L.geoJson(geojson, {
    pointToLayer: function(feature, latlng) {
        return new L.Marker(latlng, {
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.popupContent);
    }
  });vancouver.addLayer(geojsonLayer);
});


