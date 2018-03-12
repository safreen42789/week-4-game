$(document).ready(function() {

    let pageLoad = Math.floor(Math.random()*25+10);
        $('#randomNumber').text(pageLoad);
    
    let numWins = 0;
    let numLoses = 0;
    let userScore = 0;

   
        
    
        $('#A').on('click', function(){
            let aNum = Math.floor(Math.random()*10+1);
                userScore = userScore + aNum;
                $('#totalScore').text(userScore);
        
            if (userScore == pageLoad) {
                
                numWins++;
                $('#numWins').text(numWins);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;

            }
            else if (userScore > pageLoad){
               
                numLoses++;
                $('#numLoses').text(numLoses);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;
            }
    });

    $('#B').on('click', function(){
            
                let bNum = Math.floor(Math.random()*10+1);
                userScore = userScore + bNum;
                $('#totalScore').text(userScore);
        
            if (userScore == pageLoad) {
                numWins++;
                $('#numWins').text(numWins);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;

            }
            else if (userScore > pageLoad){
                numLoses++;
                $('#numLoses').text(numLoses);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;
            }
    });
    $('#C').on('click', function(){
                 let cNum = Math.floor(Math.random()*10+1);

                userScore = userScore + cNum;
                $('#totalScore').text(userScore);
        
            if (userScore == pageLoad) {
                numWins++;
                $('#numWins').text(numWins);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;


            }
            else if (userScore > pageLoad){
                numLoses++;
                $('#numLoses').text(numLoses);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;

            }
    });
    $('#D').on('click', function(){

                 let dNum = Math.floor(Math.random()*10+1);

                userScore = userScore + dNum;
                $('#totalScore').text(userScore);
        
            if (userScore == pageLoad) {
                numWins++;
                $('#numWins').text(numWins);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;


            }
            else if (userScore > pageLoad){
                numLoses++;
                $('#numLoses').text(numLoses);
                let pageLoad = Math.floor(Math.random()*25+10);
                $('#randomNumber').text(pageLoad);
                userScore = 0;

            }
    });
 });
     // display wins and loses

    // display total score
    
    // dispaly crytals



