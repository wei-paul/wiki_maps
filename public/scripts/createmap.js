$(document).ready(function() {

  $('.block').on('click', onChange)

});

const onChange = function () {
  return $("#titleTable").show()
};


//Generate Random id (number)
const generateRandomNumber = function() {
  return Math.floor((Math.random() * 999999) + 100000)
};
