const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const selectP = document.getElementById("selectP");
const resultP = document.getElementById("resultP");
const winLabel = document.getElementById("winLabel");
const drawLabel = document.getElementById("drawLabel");
const loseLabel = document.getElementById("loseLabel");
const resetBtn = document.getElementById("resetBtn");

let countWin = 0;
let countDraw = 0;
let countLose = 0;
let random;


//Rock Button
rock.onclick = function(){
    random = Math.floor(Math.random()*100)+1;   //Set random 1-100 numbers.
    
    if (random >= 1 && random <= 33) {   
        selectP.textContent = `You select the rock👊🏾!`;
        resultP.textContent = "Computer select the rock👊! It's a tie.";
        countDraw +=1;
        drawLabel.textContent = countDraw;
    } else if (random >= 34 && random <= 66) {
        selectP.textContent = "You select the rock👊🏾!";
        resultP.textContent = "Computer select the paper🤚! You Lose!";
        countLose+=1;
        loseLabel.textContent = countLose;
    } else {
        selectP.textContent = "You select the rock👊🏾!";
        resultP.textContent = "Computer select the scissors✌️! You Win!";
        countWin+=1;
        winLabel.textContent = countWin;
    }
}

//Paper Button
paper.onclick = function(){
    random = Math.floor(Math.random()*100)+1; //Set random 1-100 numbers.
    
    if (random >= 1 && random <= 33) {
        selectP.textContent = `You select the paper🤚🏾!`;
        resultP.textContent = "Computer select the rock👊! You Win!";
        countWin+=1;
        winLabel.textContent = countWin;
    } else if (random >= 34 && random <= 66) {
        selectP.textContent = "You select the paper🤚🏾!";
        resultP.textContent = "Computer select the paper🤚! It's a tie.";
        countDraw +=1;
        drawLabel.textContent = countDraw;
    } else {
        selectP.textContent = "You select the paper🤚🏾!";
        resultP.textContent = "Computer select the scissors✌️! You Lose!";
        countLose+=1;
        loseLabel.textContent = countLose;
    }
}

//Scissors Button
scissors.onclick = function(){
    random = Math.floor(Math.random()*100)+1; //Set random 1-100 numbers.
    
    if (random >= 1 && random <= 33) {
        selectP.textContent = `You select the scissors✌🏾!`;
        resultP.textContent = "Computer select the rock👊! You Lose!";
        countLose+=1;
        loseLabel.textContent = countLose;
    } else if (random >= 34 && random <= 66) {
        selectP.textContent = "You select the scissors✌🏾!";
        resultP.textContent = "Computer select the paper🤚! You Win!";
        countWin+=1;
        winLabel.textContent = countWin;
    } else {
        selectP.textContent = "You select the scissors✌🏾!";
        resultP.textContent = "Computer select the scissors✌️! It's a tie.";
        countDraw +=1;
        drawLabel.textContent = countDraw;
    }
}

//Reset Button
resetBtn.onclick = function() {
    countWin = 0;
    winLabel.textContent = countWin;
    countDraw = 0;
    drawLabel.textContent = countDraw;
    countLose = 0;
    loseLabel.textContent = countLose; 

    selectP.textContent = ``;
    resultP.textContent = ``;
}