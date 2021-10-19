// Client facing scripts here
//scrolls our showcase left/right
$(document).ready(function() {

  $('#scrollButtonRight').click(function(event) {
    event.preventDefault();
    $('#showcase').animate({
      scrollLeft: "+=317ev"
    }, "fast");
  });
  $('#scrollButtonLeft').click(function(event) {
    event.preventDefault();
    $('#showcase').animate({
      scrollLeft: "-=317ev"
    }, "fast");
  });
});
//   $("#createmap").on("save", function(e) {
//     e.preventDefault();
//     let error = false;
//   })
//   $.ajax("/", {
//     method: "POST",
//     data: $(this).serialize(),
//   }).then (() => {
//     loadMaps();
//   });

//   const loadMaps = function() {
//     $.ajax(`/`, {
//       method: "GET",
//     }).then((res) => {
//       renderMaps(res);
//     });
//   };
//   loadMaps();

//   const renderMaps = function(maps) {
//     $("#showcase").empty();
//     for (let map of maps) {
//       const element = createMapElement(map);
//       $('#showcase').append(element);
//     }
//   };
//   //load new maps onto showcase
//   const createMapElement = function(map) {
//     const $map = $(`<div class="thumbnail">
//     <form
//     action="/editMap"
//     method="POST">
//     <button class="thumbnailButton">
//     <div class="thumbnailTitle">${map.user.title}
//     <div class="thumbnailCategory">${user.map.category}</div>
//     <div class="thumbnailImage">${user.map.image}</div>
//     </div>
//     </div>
//     </button>
//     </form>`);
//     return $map;
//   }
// });
