// const { insertPin } = require("../../db/queries/map_queries");
// const express = require("express");
// const cookieSession = require('cookie-session');

let map2, markerLocation;

$(document).ready(function() {
  let markerButton = true;
  let markerMode = false;

  var vancouver = L.map('map2').setView([49.2827, -123.1207], 10);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZm9ndGhpZWYiLCJhIjoiY2t1dWZyb3ZvNXlvMjJvbno5ODJ0ejB0MiJ9.f4puqeLncdbCee2rxc5jNA'
  }).addTo(vancouver);

  vancouver.on('click', addMarker);
  function addMarker(temp) {
    console.log("addMarker is", temp)
    if (markerMode) {
      markerMode = false;

      let newMarker = new L.marker(temp.latlng);

      let long = temp.latlng.lng
      let lat = temp.latlng.lat


      $('.center').show();
      $(this).hide();

      $('#close').on('click', function () {
        $('.center').hide();
      })


      // $("#tag-information").unbind('submit')

      $("#tag-information").submit(function(event) {
        console.log("testing is: ")
        event.preventDefault();
        newMarker.bindPopup(`<b>${$(this).find("#Tag-title").val()}</b><img width="150" height="150" src="${$(this).find("#Image-url-link").val()}">`);
        $('.center').hide();

        let description = $(this).find("#Tag-title").val()
        let image_url = $(this).find("#Image-url-link").val()
        markerButton= true;
        let map_id = 1; //HARD CODING MAP_ID because MAP_ID is undefined right now
        // insertPin(description, image_url, lat, long, map_id, user_id) (can't query database on front end)
        $.ajax({
          type: "POST",
          data: { description, image_url, lat, long, map_id },
          url: "/pins",
        })
        .done((res) => {
          console.log(res);
        })
        .fail((err) => {
          console.log("Error");
        })

      })

      $("#map2").css("cursor", "")
      newMarker.addTo(vancouver);
    }
  }

  $("#pinIcon").on("click", (event) => {
    event.stopPropagation();
    if (markerButton) {
      $("#map2").css("cursor", "url(https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png) 12 43, move")
      markerButton = false;
      markerMode = true;
    }
  });



  // ("#create_map").on("click", (event) => {

  //   $.ajax({
  //     type: "POST",
  //     data: { category_name },
  //     url: "/maps",
  //   })
  //   .done((res) => {
  //     console.log(res);
  //   })
  //   .fail((err) => {
  //     console.log("Error");

  // })
  // })

});
