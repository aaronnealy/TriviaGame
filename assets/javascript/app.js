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

var questions =[{
    questions: "What is the name of Batman's second Robin?",
    answers:["Dick Grayson", "Tim Drake", "Jason Todd", "Damian Wayne"],
    correctAnswer: "Jason Todd"
}, {
    questions: "Which Batgirl did The Joker paralyze?",
    answers:["Stephanie Brown", "Kate Kane", "Helena Wayne", "Barbara Gordon"],
    correctAnswer: "Barbara Gordon"
}, {
    questions: "After leaving Batman, Dick Grayson became known as which of the following:",
    answers:["Red Hood", "Nightwing", "Batwing", "Red Robin"],
    correctAnswer: "Nightwing"
}, {
    questions: "Which of the following is NOT a 'Gotham City Siren'?",
    answers:["The Huntress", "Catwoman", "Harley Quinn", "Poison Ivy"],
    correctAnswer: "The Huntress"
}, {
    questions: "Who is the mother of Damian Wayne?",
    answers: ["Nyssa al Ghul", "Selina Kyle", "Talia al Ghul", "Lady Shiva"],
    correctAnswer: "Talia al Ghul"
}, {
    questions: "What was Catwoman called in her first apperance in the Batman comic books?",
    answers: ["Kitten", "The Cat", "Black Cat", "Miss Kitty"],
    correctAnswer: "The Cat"

}];


