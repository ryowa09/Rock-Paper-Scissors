const choices = ["ROCK", "PAPER", "SCISSORS"];

const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
const ties = document.getElementById("ties");

const choiceBtn = document.querySelectorAll(".choice-container button");  // Fixed: Selecting the buttons correctly.

const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

let winCount = 0;
let lossCount = 0;
let tieCount = 0;

// Start the game: Enable the choice buttons when the "Start Game" button is clicked
startBtn.onclick = function() {
    choiceBtn.forEach(button => {
        button.disabled = false;  // Enable all choice buttons
    });
    result.textContent = `Pick your weapon`
};

// Handle game logic when a choice is made
function startGame(playerChoice) {

    const npcChoice = choices[Math.floor(Math.random() * 3)];
    let resultGame = "";

    // Display choices for user and NPC
    document.querySelector(".userChoice img").src = `icon-${playerChoice.toLowerCase()}.png`;
    document.querySelector(".computerChoice img").src = `icon-${npcChoice.toLowerCase()}.png`;

    if (playerChoice === npcChoice) {
        resultGame = "CHOOSE AGAIN NIGGA";
        tieCount++;
        ties.textContent = tieCount;
    } else {
        switch (playerChoice) {
            case "ROCK":
                resultGame = (npcChoice === "SCISSORS") ? "DAMN U GOT SOME SKILLS NIGGA" : "NIGGA U R BAD";
                break;
            case "PAPER":
                resultGame = (npcChoice === "ROCK") ? "DAMN U GOT SOME SKILLS NIGGA" : "NIGGA U R BAD";
                break;
            case "SCISSORS":
                resultGame = (npcChoice === "PAPER") ? "DAMN U GOT SOME SKILLS NIGGA" : "NIGGA U R BAD";
                break;
        }
    }

    // Update the scores and result message
    switch (resultGame) {
        case "DAMN U GOT SOME SKILLS NIGGA":
            winCount++;
            wins.textContent = winCount;
            break;
        case "NIGGA U R BAD":
            lossCount++;
            losses.textContent = lossCount;
            break;
    }
    result.textContent = resultGame;
}

// Reset the game
resetBtn.onclick = function() {
    winCount = 0;
    lossCount = 0;
    tieCount = 0;
    wins.textContent = winCount;
    losses.textContent = lossCount;
    ties.textContent = tieCount;
    result.textContent = "Press Start!";
    document.querySelector(".userChoice img").src = "icon-user.png";
    document.querySelector(".computerChoice img").src = "icon-computer.png";
    // Disable the choice buttons after resetting the game
    choiceBtn.forEach(button => {
        button.disabled = true;
    });
};
