var startPopup = document.getElementById('startPopup');
var endPopup = document.getElementById('endPopup');
var winnerName = document.getElementById('winnerName');
var allMoves = ['rock','paper','scissors','lizard','spock'];
var choiceBlock = document.getElementById('choiceBlock');
var userScoreHTML = document.getElementById('userScore');
var botScoreHTML = document.getElementById('botScore');
var commentsBlock = document.getElementById('commentsBlock');

var userScore = 0;
var botScore = 0;

function scorSynch(value) {
   if (value == 0){
      console.log(userScore, botScore);
      userScoreHTML.innerHTML = userScore;
      botScoreHTML.innerHTML = botScore;
   }else{
      setTimeout(function () {
         console.log(userScore, botScore);
         userScoreHTML.innerHTML = userScore;
         botScoreHTML.innerHTML = botScore;
      }, 1500);
   }
}
function reset(){
   document.getElementById("userMoveImg").classList.remove('openUser');
   document.getElementById("botMoveImg").classList.remove('openBot');
   document.getElementById("userMoveImg").src = ``;
   document.getElementById("botMoveImg").src = ``;
   choiceBlock.classList.remove('choiceClosed');
}
function endScore(scenario) {
   setTimeout(function () {
      if (scenario == 'user') {
         winnerName.innerHTML = `Je`;
      } else {
         winnerName.innerHTML = `Bot`;
      };
      document.getElementById('userScoreEnd').innerHTML = userScore;
      document.getElementById('botScoreEnd').innerHTML = botScore;
      endPopup.style.cssText = `
         opacity: 1;
         pointer-events: all;
      `;
   }, 3500);
};
document.getElementById('endButton').addEventListener('click', function (e) {
   commentsBlock.innerHTML = `Kies hieronder uw zet`;

   userScore = 0;
   botScore = 0;

   scorSynch(0);
   reset();
   endPopup.style.cssText = `
      opacity: 0;
      pointer-events: none;
   `;
});


function comment(comentType){
   setTimeout(function () {
      if(comentType == 0){
         commentsBlock.innerHTML = `De bot heeft deze ronde gewonnen.`;
      }else if (comentType == 1){
         commentsBlock.innerHTML = `Jij wint deze ronde. Om te winnen: ${3-userScore} punten`;
      }else{
         commentsBlock.innerHTML = 'Gelijkspelend.';
      }
   }, 1500);
}

document.getElementById('startButton').addEventListener('click', function (e) {
   startPopup.style.display = "none";
});

function round(userMove){
   commentsBlock.innerHTML = '';
   choiceBlock.classList.add('choiceClosed');

   var randomIndex = Math.floor(Math.random() * allMoves.length);
   var botMove = allMoves[randomIndex];

   document.getElementById("userMoveImg").src = `img/${userMove}.png`;
   document.getElementById("botMoveImg").src = `img/${botMove}.png`;
   document.getElementById("userMoveImg").classList.add('openUser');
   document.getElementById("botMoveImg").classList.add('openBot');

   if(userMove == 'scissors'){
      if(botMove == 'spock' || botMove == 'rock'){
         botScore ++;
         comment(0);
         scorSynch(1);
      }else if(botMove == 'scissors'){
         comment(2);
      }else{
         userScore ++;
         comment(1);
         scorSynch(1);
      }
   }else if(userMove == 'paper'){
      if(botMove == 'lizard' || botMove == 'scissors'){
         botScore ++;
         comment(0);
         scorSynch(1);
      }else if(botMove == 'paper'){
         comment(2);
      }else{
         userScore ++;
         comment(1);
         scorSynch(1);
      }
   }else if(userMove == 'rock'){
      if(botMove == 'spock' || botMove == 'paper'){
         botScore ++;
         comment(0);
         scorSynch(1);
      }else if(botMove == 'rock'){
         comment(2);
      }else{
         userScore ++;
         comment(1);
         scorSynch(1);
      }
   }
   else if(userMove == 'lizard'){
      if(botMove == 'rock' || botMove == 'scissors'){
         botScore ++;
         comment(0);
         scorSynch(1);
      }else if(botMove == 'lizard'){
         comment(2);
      }else{
         userScore ++;
         comment(1);
         scorSynch(1);
      }
   }
   else if(userMove == 'spock'){
      if(botMove == 'paper' || botMove == 'lizard'){
         botScore ++;
         comment(0);
         scorSynch(1);
      }else if(botMove == 'spock'){
         comment(2);
      }else{
         userScore ++;
         comment(1);
         scorSynch(1);
      }
   }

   if(userScore == 3){
      scenario = 'user';
      endScore(scenario);
   }else if (botScore == 3){
      scenario = 'bot';
      endScore(scenario);
   }else{
      setTimeout(function () {
         reset();
      }, 3500);
   }
};