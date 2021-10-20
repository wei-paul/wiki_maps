$(document).ready(function() {
  
  let category = "" 

  $('#food').on('click', function() {
    category = "food"
    return $("#titleTable").show()
  });

  $('#hikes').on('click', function() {
    category = "hikes"
    return $("#titleTable").show()
  });

  $('#landmarks').on('click', function() {
    category = "landmarks"
    return $("#titleTable").show()
  });
  
  $('#schools').on('click', function() {
    category = "schools"
    return $("#titleTable").show()
  });

  $('#parks').on('click', function() {
    category = "parks"
    return $("#titleTable").show()
  });



//Generate Random id (number)
const generateRandomNumber = function() {
  return Math.floor((Math.random() * 999999) + 100000)
  };

$("#titleTable").on("save", function (e) {
  e.preventDefault();

  $.ajax({
    type: "POST",
    data: { title, category_name },
    url: "/maps",
    success: function (res) {
      alert("Map has been saved!");
    },
    error: function () {
      console.log("there is some error");
    }
    .then(() => {
      res.redirect("/editMap")
    })

  });

  // let error = false;
  // const $input = $('#titleInput');
  // if ($input.val().length === 0) {
  //   // $("#alert-boxA").slideDown('slow');
  //   // $("#alert-boxA").delay(1000).slideUp('slow');
  //   error = true;
  // }

  // if (error === false) {

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