function computerPlay(){
    let choices = ["rock","paper","scissors"];
    let randomPick = Math.floor(Math.random()*3);
    let choice = choices[randomPick];
    return choice;
  }
  
  playerChoice = prompt("Do you choose 'rock','paper', or... the dreaded 'scissors'?");
  alert("You chose " + playerChoice);
  
  computerPick = computerPlay();
  alert("It chose " + computerPick);