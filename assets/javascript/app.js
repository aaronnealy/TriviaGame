//First I want to create a timer that counts down and a start button to begin the countdown
//Next I will want to create a function that removes the start screen

window.onload = function() {
  $("#startTime").on("click", start);
};
$()

$("#start").on("click", function(){
    $("#subwrapper").remove();
})
var intervalId;
var clockRunning = false;
var time = 45;

//Count Down timer
function start() {
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}


function count() {
  time--;
  $("#timer").html("<p> Time Remaining: " + time + "<p>");
  if (time === 0) {
    clearInterval(intervalId);
    clockRunning = false;
  }
}

//Next I will want to create an array of questions that also has an array of answers
//Objects


