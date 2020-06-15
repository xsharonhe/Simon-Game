// initial variables:
var buttonColours = ["blue", "purple", "green", "cream"];

var gamePattern = [];
var userPattern = [];

var gameStarted = false;
var level = 0;

//key level control:
$(document).keydown(function() {
  if (!gameStarted) {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameStarted = true;
  }
});

//buttonclick
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userPattern.length - 1);
});

//functions:
function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNum = Math.floor(Math.random() * 4);

  var randomColour = buttonColours[randomNum];
  gamePattern.push(randomColour);

  $("#" + randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 200);
}

function checkAnswer(currentLevel) {
  if (userPattern[currentLevel] === gamePattern[currentLevel]) {
     console.log("success");
  }
  else {
    console.log("wrong")
  }
}
