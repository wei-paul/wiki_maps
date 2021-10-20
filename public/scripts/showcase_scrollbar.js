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

 // let error = false;
  // const $input = $('#titleInput');
  // if ($input.val().length === 0) {
  //   // $("#alert-boxA").slideDown('slow');
  //   // $("#alert-boxA").delay(1000).slideUp('slow');
  //   error = true;
  // }

  // if (error === false) {

    // const loadMaps = function() {
    //   $.ajax("http://localhost:8080/", {
    //       method: "GET"
    //   }).then((res) => {
    //       renderMaps(res);

    //   });
    // };
    //   loadMaps();

    // const renderMaps = function(maps) {
    //     $("#showcase").empty();
    //     for (let map of maps) {
    //       const element = createMapElement(map);
    //       $("#showcase").prepend(element);
    //     }
    //   };

    // const createMapElement = function(map) {
    //   const ago = timeago.format(tweet.created_at);
    //   const $map = $(`<form
    //   id="titleForm"
    //   action="/"
    //   method="POST">
    //   <div>
    //   <input
    //     id="titleInput"
    //     type="placeholder"
    //     value="Title">
    //   <input
    //     type="submit"
    //     value="save">
    //   </div>
    // </form>`);
    // }

