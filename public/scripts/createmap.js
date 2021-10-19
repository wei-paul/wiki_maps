$(document).ready(function() {
  $('#saveIcon').on('click', onChange)
});

const onChange = function () {
  return $("#titleTable").show()
};

$("#titleForm").on("save", function (e) {
  e.preventDefault();
  let error = false;
    const $input = $('#titleInput');

    if ($input.val().length === 0) {
      // $("#alert-boxA").slideDown('slow');
      // $("#alert-boxA").delay(1000).slideUp('slow');
      error = true;
    }

    if (error === false) {
      $.post("/api/maps", this.serialize())
      .then(() => {
        loadMaps();
      });
      }

    const loadMaps = function() {
      $.ajax("http://localhost:8080/", {
          method: "GET"
        }).then((res) => {
          renderMaps(res);

        });
      };
      loadMaps();

    const renderMaps = function(maps) {
        $("#showcase").empty();
        for (let map of maps) {
          const element = createMapElement(map);
          $("#showcase").prepend(element);
        }
      };

    const createMapElement = function(map) {
      const ago = timeago.format(tweet.created_at);
      const $map = $(`<form
      id="titleForm"
      action="/"
      method="POST">
      <div>
      <input
        id="titleInput"
        type="placeholder"
        value="Title">
      <input
        type="submit"
        value="save">
      </div>
    </form>`);
    }

});
