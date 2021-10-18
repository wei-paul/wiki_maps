// Client facing scripts here
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



// $('#scrollButtonLeft').on("click", () => {
//   $('#showcase').scrollLeft()
// }, "fast");

// $(".snap-left").on("click", () => {
//   document.documentElement.scrollTop = 0;
// });
