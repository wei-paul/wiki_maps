$(document).ready(function() {

  let category = ""

  $('.block').on('click', function() {
    category = $(this).attr("id")
    $("#titleTable").show()
  });

//Generate Random id (number)
const generateRandomNumber = function() {
  return Math.floor((Math.random() * 999999) + 100000)
  };

  $("#titleForm").submit("save", function (e) {
    e.preventDefault();

    const title = $("#titleInput").val();
    const data = {
      title,
      category_name: category
    }

    return $.ajax({
      type: "POST",
      data,
      url: "/maps",
      success: function (res) {
        alert("Map has been saved!");
      },
      error: function () {
        console.log("there is some error");
      }

    })
  });

});
