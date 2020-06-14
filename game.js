// initial variables:
var buttonColours = ["blue", "purple", "green", "cream"];
var gamePattern = [];
var userPattern = [];

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");

  userPattern.push(userChosenColour);

  playSound(userChosenColour);
});

function nextSequence() {
  var randomNum = Math.floor(Math.random()*4);

  var randomColour = buttonColours[randomNum];

  gamePattern.push(randomColour);

  $("#" + randomColour).fadeIn(100),fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(Out);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
