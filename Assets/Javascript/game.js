//page load
$(document).ready(function() {

// computer picks random number on page load and displays it
    let pageLoad = Math.floor(Math.random()*25+10);
        $('#randomNumber').text(pageLoad);

//sets variables for wins/loses/userscore
    let numWins = 0;
    let numLoses = 0;
    let userScore = 0;

// function that fires every time crystal A is clicked 
        $('#A').on('click', function(){
            let aNum = Math.floor(Math.random()*10+1); //computer picks random number for crystal A
                userScore = userScore + aNum; //adds/displays random number of crystal A to user's score
                $('#totalScore').text(userScore);
        
            if (userScore === pageLoad) { //start of conditional if user score === random number computer picked on page load
                
                numWins++;  // adds 1 to number of wins
                $('#Wins').text(numWins); //displays wins 
                let pageLoad = Math.floor(Math.random()*25+10); //computer picks another random number
                $('#randomNumber').text(pageLoad); //displays random number computer picked
                userScore = 0; //resets user score to 0
                $('#totalScore').text(userScore);
            
            }
            else if (userScore > pageLoad){ //conditional if user's score exceeds the random number picked by computer on page load
               
                numLoses++; // adds to loses
                $('#Loses').text(numLoses); //displays number of loses
                let pageLoad = Math.floor(Math.random()*25+10); //computer generates another random number
                $('#randomNumber').text(pageLoad); //displays random number 
                userScore = 0; //resets user score to 0
                $('#totalScore').text(userScore);
                
            };
    });

// function that fires every time crystal B is clicked 
    $('#B').on('click', function(){
            
                let bNum = Math.floor(Math.random()*10+1);
                
                userScore = userScore + bNum;
                $('#totalScore').text(userScore);
        
            if (userScore === pageLoad) {
                numWins++;
                $('#Wins').text(numWins);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;
                $('#totalScore').text(userScore);
               
            }
            else if (userScore > pageLoad){
                numLoses++;
                $('#Loses').text(numLoses);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;
                $('#totalScore').text(userScore);

            };
    });

// function that fires every time crystal C is clicked 
    $('#C').on('click', function(){
                 let cNum = Math.floor(Math.random()*10+1);

                userScore = userScore + cNum;
                $('#totalScore').text(userScore);
        
            if (userScore === pageLoad) {
                numWins++;
                $('#Wins').text(numWins);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;
                $('#totalScore').text(userScore);
            
            }
            else if (userScore > pageLoad){
                numLoses++;
                $('#Loses').text(numLoses);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;
                $('#totalScore').text(userScore);
                
            };
    });

// function that fires every time crystal D is clicked 
    $('#D').on('click', function(){

                 let dNum = Math.floor(Math.random()*10+1);

                userScore = userScore + dNum;
                $('#totalScore').text(userScore);
        
            if (userScore === pageLoad) {
                numWins++;
                $('#Wins').text(numWins);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;
                $('#totalScore').text(userScore);

            }

            else if (userScore > pageLoad){
                numLoses++;
                $('#Loses').text(numLoses);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;
                $('#totalScore').text(userScore);
            
            };
    });
 });

     // display wins and loses

    // display total score
    
    // dispaly crytals



