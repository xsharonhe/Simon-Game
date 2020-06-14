var buttonColours = ["blue", "purple", "green", "cream"];
var gamePattern = [];

function nextSequence() {
  var randomNum = Math.floor(Math.random()*4);

  var randomColour = buttonColours[randomNum];

  gamePattern.push(randomColour);

  $("#" + randomColour).fadeIn(100),fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(Out);

  var audio = new Audio("sounds/" + randomColour + ".mp3");
}
