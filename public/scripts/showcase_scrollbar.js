// Client facing scripts here
//scrolls our showcase left/right
$(document).ready(function() {

    // const data = {
    //   category_name: category
    // }

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
  // console.log("maps:", maps)
  // $("#showcase").empty();
  for (let map of maps) {
    // console.log("map:", map)
    const element = createMapElement(map);
    $('#showcase').prepend(element);
  }
};

const createMapElement = function(map) {
  const showMap = $(`

  <div class="thumbnail">
          <form
            action="/editMap"
            method="GET">
            <input type="hidden" name="map_id" value="${map.id}"/>
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
