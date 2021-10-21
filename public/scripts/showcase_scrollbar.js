// Client facing scripts here
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

  $.ajax("/api/maps", {
    method: "GET",
  }).then((res) => {
    renderMaps(res.maps);
    console.log(res)
  });

});

const renderMaps = function(maps) {

  for (let map of maps) {
    const element = createMapElement(map);
    $('#showcase').prepend(element);
  }
};

const createMapElement = function(map) {
  const showMap = $(`

  <div class="thumbnail">
          <form
            action="/editMap"
            method="POST">
          <button class="thumbnailButton">
            <div class="thumbnailTitle">${map.title}
              <div class="thumbnailCategory">${map.category_name}</div>
                <div class="thumbnailImage">Image</div>
            </div>
          </div>
          </button>
        </form> `)

    return showMap;
};
