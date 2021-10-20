$(document).ready(function() {
  $('#saveIcon').on('click', onChange)




});
const onChange = function () {
  return $("#titleTable").show()
};


//Generate Random id (number)
const generateRandomNumber = function() {
  return Math.floor((Math.random() * 999999) + 100000)
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
      $.ajax({
        type: "POST",
        data: "02_maps",
        success: function (response) {
            alert("Map has been saved!");
        },
        error: function () {
            console.log("there is some error");
        }
        .then(() => {
          res.redirect("/editMap")
        })

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

