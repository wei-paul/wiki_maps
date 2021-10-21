$(document).ready(function() {
  document.getElementById('map2').style.pointerEvents = 'none';
  document.getElementById('titleForm').style.pointerEvents = 'auto';


  let category = ""

  $('.block').on('click', function() {
    category = $(this).attr("id")
    $("#titleTable").show()
  });

  // $('#deleteIcon').on('click', function() => {

  // })

//Generate Random id (number)
const generateRandomNumber = function() {
  return Math.floor((Math.random() * 999999) + 100000)
  };

  $("#titleForm").submit("save", function (e) {
    $("#titleTable").toggle();
    e.preventDefault();

    const title = $("#titleInput").val();
    const data = {
      title,
      category_name: category
    }

    $.ajax({
      type: "POST",
      data,
      url: "/maps",
      success: function (res) {
        $("#map2").attr("mapId", res.id)
      },
      error: function () {
        console.log("there is some error");
      }

    })
    document.getElementById('map2').style.pointerEvents = 'auto';
  });

});

