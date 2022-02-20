let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const choices_div = document.querySelector(".choices");

function computerPlay(){
    let choices = ["rock","paper","scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    let choice = choices[randomChoice];
    return choice;
  }

function playRound(playerPick,computerPick){
    if (playerPick === computerPick){
      result_div.textContent = "It's a tie! like kissing your..."
    } 
    else if (playerPick === "rock"){
  
      if (computerPick === "paper"){
        result_div.textContent = "rock is covered by paper! You Lose!"
        compScore += 1;
      } else {
        result_div.textContent = "rock smashes scissors! You Win!"
        userScore += 1;
      }
  
    }
    else if (playerPick === "paper"){
  
      if (computerPick === "scissors"){
        result_div.textContent = "paper is cut by scissors! You Lose!"
        compScore += 1;
      } else {
        result_div.textContent = "paper covers rock! You Win!"
        userScore += 1;
      }
  
    }
    else if (playerPick === "scissors"){
  
      if (computerPick === "rock"){
        result_div.textContent = "scissors smashed by rock! You Lose!";
        compScore += 1;
        
      } else {
        result_div.textContent = "scissors cuts paper! You Win!"
        userScore += 1;
      }
  
    } else {result_div.textContent = "you entered in invalid choice"}
    
    if (compScore == 5) {
        scoreboard_div.textContent = "You Lose!"
        compScore = 0;
        userScore = 0;
    } else if (userScore == 5) {
        scoreboard_div.textContent = "You Win!"
        compScore = 0;
        userScore = 0;
    }

    userScore_span.textContent = userScore;
    compScore_span.textContent = compScore;

  }
  

const rock_btn = document.querySelector('#rock');
rock_btn.addEventListener('click',function(){
    playRound("rock",computerPlay());
})

const paper_btn = document.querySelector('#paper');
paper_btn.addEventListener('click',function(){
    playRound("paper",computerPlay());
})

const scissors_btn = document.querySelector('#scissors');
scissors_btn.addEventListener('click',function(){
    playRound("scissors",computerPlay());
})
