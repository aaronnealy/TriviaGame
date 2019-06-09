//First I want to create a timer that counts down and a start button to begin the countdown
//Next I will want to create a function that removes the start screen

// window.onload = function() {
//   $("#startTime").on("click", start);
// };
// $()


$("#start").on("click", function(){
    score.start();
        
    });

$(document).on("click", "#end", function(){
    score.done();
})
    
    //Next I will want to create an array of questions that also has an array of answers
    //Objects
    
    var questions =[{
        questions: "What is the name of Batman's second Robin?",
        answers:["Damian Wayne", "Tim Drake", "Jason Todd", "Dick Grayson"],
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
        answers:["Nyssa al Ghul", "Selina Kyle", "Talia al Ghul", "Lady Shiva"],
        correctAnswer: "Talia al Ghul"
    }, {
        questions: "What was Catwoman called in her first apperance in the Batman comic books?",
        answers:["Kitten", "The Cat", "Black Cat", "Miss Kitty"],
        correctAnswer: "The Cat"
    }, {
        questions: "What is Batman's real name?",
        answers:["Count Dracula", "Harvey Dent", "Edward Cullen", "Bruce Wayne"],
        correctAnswer: ["Bruce Wayne"]
    
    }];
    
    
    var score = {
        correct: 0,
        incorrect: 0,
        counter: 60,
        countdown: function(){
            score.counter--;
            $("#counter").html(score.counter); 
            if(score.counter<=0){
                
                score.done();
            }
        },
    start: function(){
            timer = setInterval(score.countdown,1000);
            $("#title").append('<h3>Time Remaining: <span id="counter">60</span> Seconds</h3>');
            $("#start").remove();
            for(var i=0;i<questions.length;i++){
                $("#subwrapper").append("<h2>" +questions[i].questions+ "</h2");
                for(var j=0;j<questions[i].answers.length; j++){
                    $("#subwrapper").append("<input type= 'radio' name='questions-"+i+"' value= '"+questions[i].answers[j]+"'>"+questions[i].answers[j])
                }
            }
            $("#subwrapper").append("<br><button id='end'>Submit</button>")
           
        },
        done: function(){
            $.each($("input[name='questions-0']:checked"),function(){
                if($(this).val()==questions[0].correctAnswer){
                    score.correct++;
                } else{
                    score.incorrect++;
                }
            });
            $.each($("input[name='questions-1']:checked"),function(){
                if($(this).val()==questions[1].correctAnswer){
                    score.correct++;
                } else{
                    score.incorrect++;
                }
            });
            $.each($("input[name='questions-2']:checked"),function(){
                if($(this).val()==questions[2].correctAnswer){
                    score.correct++;
                } else{
                    score.incorrect++;
                }
            });
            $.each($("input[name='questions-3']:checked"),function(){
                if($(this).val()==questions[3].correctAnswer){
                    score.correct++;
                } else{
                    score.incorrect++;
                }
            });
            $.each($("input[name='questions-4']:checked"),function(){
                if($(this).val()==questions[4].correctAnswer){
                    score.correct++;
                } else{
                    score.incorrect++;
                }
            });
            $.each($("input[name='questions-5']:checked"),function(){
                if($(this).val()==questions[5].correctAnswer){
                    score.correct++;
                } else{
                    score.incorrect++;
                }
            });
            $.each($("input[name='questions-6']:checked"),function(){
                if($(this).val()==questions[6].correctAnswer){
                    score.correct++;
                } else{
                    score.incorrect++;
                }
            });

            this.result();
            },

            result: function(){;
                clearInterval(timer);
                $("#subwrapper h2").remove();

                $("#subwrapper").html("<h2>All done!</h2>");
                $("#subwrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
                $("#subwrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
                $("#subwrapper").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        }
    }