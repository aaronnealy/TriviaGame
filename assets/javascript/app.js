
    $("#start").on("click", function(){
        score.start();
            
        });
    
    $("#next").on("click", function(){
        score.next();
    })
    //Our button to end the game/counter
    $(document).on("click", "#end", function(){
        score.done();
    });
             var theGame = { 
                 questionBank: [{
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
        },
             ],
        }
    
        var answerContainer = [];
    
    
             var score = {
            correct: 0,
            incorrect: 0,
            counter: 300,
            //I want my counter to decrease in time and then stop coundting down once it reaches 0.
            countdown: function(){
                score.counter--;
                $("#counter").html(score.counter); 
                if(score.counter<=0){
                    
                    score.done();
                }
            },
         start: function(){
            timer = setInterval(score.countdown,1000);
            $("#title").append('<h3>Time Remaining: <span id="counter">300</span> Seconds</h3>');
            $("#start").remove(); //removes my starting page by targeting the id start in my html
            // for(var i=0;i<questions.length;i++){
            for(var i=0;i<theGame.questionBank.length;i++){
                
                $("#subwrapper").html("<h2>" +theGame.questionBank[0].questions+ "</h2>");
                for(var j=0;j<theGame.questionBank[0].answers.length; j++){
                    $("#subwrapper").append("<input type= 'radio' name='questions-"+i+"' value= '"+theGame.questionBank[i].answers[j]+"'>"+theGame.questionBank[0].answers[j])
                    
                }
            }
            $("#subwrapper").append("<br><button id='end'>Submit</button>")
           
        },
    
    };
    
        //Here is as far as I got with the harder assignment. I was able to get the first question and answer choices to appear 
        //on the screen, but I could not figure out how to make the screen display the other questions.
    
        //The next thing I would want to do is somehow store (push) the user's answer selection into my empty array answerContainer[]
        //There would need to be some function or method that checks to see if the user's answer selection mathces the correct answer
            //userSelect[i]===theGame.questionBank[i].correctAnswer
            //if userSelect===correctAnswer --> correct++
            //else incorrect ++
    
        //If I had a working next button, the user would be able to proceed to the next questions and the previous two steps would be repeated.
            //for loop maybe?
    
        //Once the user has completed the quiz they would hit submit and the time would stop and the quiz page would be removed
            //result: function(){;
            //clearInterval(timer);
            //$("#subwrapper h2").remove();
    
        //The user would be presented with a 'Finished!' message and their results.
            //$("#subwrapper").html("<h2>Finished!</h2>");
            //$("#subwrapper").append("<h2>" Correct Answers: +correct+ "</h2>")
            //$("#subwrapper").append("<h2>" Incorrect Answers: +incorrect+ "</h2>")
            
    
    
        
        
    