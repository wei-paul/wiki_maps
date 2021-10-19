// $(document).ready(function() {
//   vancouver.on('click', addMarker);
//   function addMarker(temp) {
//     if (markerButton) {
//       let newMarker = new L.marker(temp.latlng).addTo(vancouver);

//       // let tagTitle = prompt("Please enter the title of your marker");
//       $('.center').show();
//       $(this).hide();

//       $('#close').on('click', function () {
//         $('.center').hide();
//       })

//       $("#tag-information").submit(function(event) {
//         event.preventDefault();
//         newMarker.bindPopup(`<b>${$(this).find("#Tag-title").val()}</b><img width="150" height="150" src="${$(this).find("#Image-url-link").val()}">`);
//         $('.center').hide();
//       })

//       $("#map2").css("cursor", "")
//       markerButton = false;

//     }
//   }

// });

// const onChange = function () {
//   return $(".titleTable").show()
// };
