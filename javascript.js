

let computerSelection
let comScoreInt = 0;
let playScoreInt = 0;

let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let rock = document.querySelector("#rock");

let display = document.querySelector("#display");
let comScore = document.querySelector("#com-score");
let playScore = document.querySelector("#play-score");

let victory = document.querySelector("#victory");
let cont = document.getElementById("continue");
let conYes = document.getElementById("con-yes")


function computerPlay() {
    let move = Math.floor(Math.random()*3)+1
    console.log(move);
    return move;
}

function victoryCheck() {

    if (playScoreInt == 5 || comScoreInt == 5) {
        if (playScoreInt == 5) {
            victory.textContent = "Player Wins the game!"
        }else {
            victory.textContent = "Computer wins the game!"
        }
        cont.style.display = "flex";
    }
}

function playRound(playerSelection) {

    computerSelection = computerPlay();
    console.log(computerSelection)

    if ((computerSelection == 3) && (playerSelection == 1)) {
        playScore.textContent = ++playScoreInt;
        display.textContent = "Player Wins! --- Computer picked Rock , Player picked Paper";
    }
    else if ((computerSelection == 3) && (playerSelection == 2)) {
        comScore.textContent = ++comScoreInt;
        display.textContent = "Computer Wins! --- Computer picked Rock , Player picked Scissors";
    }
    else if ((computerSelection == 2) && (playerSelection == 1)) {
        comScore.textContent = ++comScoreInt;
        display.textContent = "Computer Wins! --- Computer picked Scissors , Player picked Paper";
    }
    else if ((computerSelection == 2) && (playerSelection == 3)) {
        playScore.textContent = ++playScoreInt;
        display.textContent = "Player Wins! --- Computer picked Scissors , Player picked Rock";
    }
    else if ((computerSelection == 1) && (playerSelection == 2)) {
        playScore.textContent = ++playScoreInt;
        display.textContent = "Player Wins! --- Computer picked Paper , Player picked Scissors";
    }
    else if ((computerSelection == 1) && (playerSelection == 3)) {
        comScore.textContent = ++comScoreInt;
        display.textContent = "Computer Wins! --- Computer picked Paper , Player picked Rock";
    }
    else if ((computerSelection == playerSelection)) {
        display.textContent = "Draw";
    }
    victoryCheck()
}



paper.addEventListener("click", event => {
    console.log(playRound(1));
});
scissors.addEventListener("click", event => {
    console.log(playRound(2));
});
rock.addEventListener("click", event => {
    console.log(playRound(3));
});
conYes.addEventListener("click", event => {
    playScore.textContent = "0";
    comScore.textContent = "0";
    playScoreInt = 0;
    comScoreInt = 0;
    display.textContent = "";
    cont.style.display = "none";
})


cont.style.display = "none";
