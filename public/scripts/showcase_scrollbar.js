// Client facing scripts here

const { application } = require("express");

//scrolls our showcase left/right
const scrollbar = function() {
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
}

$(document).ready(function(){
  $("#showcase").load()
  $.ajax("/", {
    method: "GET",
    data: $(this).serialize(),
  }).then (() => {
    loadMaps();
  });
});


//load new maps onto showcase
// const createNewMapElement = function(map) {
//   const $map = $(`<div class="thumbnail">
//   <form
//     action="/editMap"
//     method="POST">
//   <button class="thumbnailButton">
//     <div class="thumbnailTitle">${map.user.title}
//       <div class="thumbnailCategory">${user.map.category}</div>
//         <div class="thumbnailImage">${user.map.image}</div>
//     </div>
//   </div>
//   </button>
// </form>`);
// return $map;
// }


