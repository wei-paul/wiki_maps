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
    for (const element of res) {
      let template = {
        "type": "Feature",
        "properties": {
        "name": "Test name",
        "popupContent": "Test description",
        "popupimageURL": "test"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-123.1207, 49.2827]
        }
      }
      template.properties.popupContent = element.description
      template.properties.popupimageURL = element.image_url
      template.geometry.coordinates = [Number(element.long), Number(element.lat)]
      console.log(template)
      geojson.features.push(template)
      console.log(geojson)
    }
    geojsonLayer = L.geoJson(geojson, {
      pointToLayer: function(feature, latlng) {
          return new L.Marker(latlng, {
          });
      },
      onEachFeature: function (feature, layer) {
          layer.bindPopup(`<div style="display: flex; align-items: center; flex-direction: column"><img width="120" height="120" src="${feature.properties.popupimageURL}"><h1>${feature.properties.popupContent}</h1></div>`);
      }
    });vancouver.addLayer(geojsonLayer);
  })

  let geojson = {
    "type": "FeatureCollection",
    "features": []
  };





  let markerButton = true;
  let markerMode = false;

  vancouver.on('click', addMarker);
  function addMarker(temp) {
    if (markerMode) {
      markerMode = false; //////// play with this

      let newMarker = new L.marker(temp.latlng);
      window.newMarker = newMarker
      window.long = temp.latlng.lng
      window.lat = temp.latlng.lat

      $('#center_hideform').show();
      $(this).hide();

      $("#map2").css("cursor", "")
      newMarker.addTo(vancouver);
    }
  }

  $("#tag-information").submit(function(event) {
    console.log("testing is: ")
    event.preventDefault();
    window.newMarker.bindPopup(`<div style="display: flex; align-items: center; flex-direction: column"><img width="120" height="120" src="${$(this).find("#Image-url-link").val()}"><h1>${$(this).find("#Tag-title").val()}</h1></div>`);
    $('#center_hideform').hide();

    let description = $(this).find("#Tag-title").val()
    let image_url = $(this).find("#Image-url-link").val()
    markerButton= true;
    let map_id = $('#map2').attr('mapid');
    console.log("mapID:", map_id);

    $.ajax({
      type: "POST",
      data: { description, image_url, lat: window.lat, long: window.long, map_id },
      url: "/pins",
    })
    .done((res) => {
      console.log(res);
    })
    .fail((err) => {
      console.log("Error");
    })

  })

  $("#pinIcon").on("click", (event) => {
    event.stopPropagation();
    if (markerButton) {
      $("#map2").css("cursor", "url(https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png) 12 43, move")
      markerButton = false;
      markerMode = true;
    }
  });

});


