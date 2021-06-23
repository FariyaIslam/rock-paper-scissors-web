// Selecting dom elements
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const round = document.querySelector("#round");
const counter = document.querySelector("#counter");
const counterAI = document.querySelector("#counterAI");
const winnerCard = document.querySelector(".winner__card");
const game__winner = document.querySelector("#game__winner");

// Adding event listeners
rock.addEventListener("click", handleRock);
paper.addEventListener("click", handlePaper);
scissors.addEventListener("click", handleScissors);



// declearing variables
let userSelection = "";
let AISelection = "";
let userCounter = 0;
let roundCounter = 2;
let AICounter = 0;
let beep = new Audio("./audio/beep.wav");
let beepError = new Audio("./audio/beepError.mp3");
let tie = new Audio("./audio/gameTie.wav");

//Event Handler functions
function handleRock() {
    userSelection = "rock";
    AISelection = selectAiValue();
    gameRun(userSelection, AISelection);
    console.log("User", userSelection, "AI", AISelection);
}

function handlePaper() {
    userSelection = "paper";
    AISelection = selectAiValue();
    gameRun(userSelection, AISelection)
    console.log("User", userSelection, "AI", AISelection);
}

function handleScissors() {
    userSelection = "scissors";
    AISelection = selectAiValue();
    gameRun(userSelection, AISelection)
    console.log("User", userSelection, "AI", AISelection);
}

// random selection function
function selectAiValue() {
    let options = ["rock", "paper", "scissors"];
    let guessingIndex = Math.round(Math.random() * 2);
    // console.log("guessing Index ", options[guessingIndex])
    return options[guessingIndex];
}

// Game start funciton And Logic
function gameRun(userSelection, AISelection) {
    // User win
    let winner = "";

    round.textContent = `ROUND : ${roundCounter}`; //Important , template literals 


    if (userSelection == "rock" && AISelection == "scissors") {
        winner = "User";
        userCounter++;
    } else if (userSelection == "paper" && AISelection == "rock") {
        winner = "User";
        userCounter++;
    } else if (userSelection == "scissors" && AISelection == "paper") {
        winner = "User";
        userCounter++;
    }

    // User loss
    if (userSelection == "rock" && AISelection == "paper") {
        winner = "AI";
        AICounter++;
    }
    else if (userSelection == "paper" && AISelection == "scissors") {
        winner = "AI";
        AICounter++
    }
    else if (userSelection == "scissors" && AISelection == "rock") {
        winner = "AI";
        AICounter++;
    }

    if (userSelection == AISelection) {
        winner = "none";
    }


    counter.innerHTML = `WIN : ${userCounter}`;
    counterAI.innerHTML = `WIN : ${AICounter}`;
    roundCounter++;

    const winnerElement = document.createElement('p');
    // winner.innerHTML = 
    if (winner == "User") {
        game__winner.innerHTML = `You are the Winner!`;
        beep.play();
    } else if (winner == "AI") {
        game__winner.innerHTML = `Oh! dear, You lost to an AI! shame!`;
        beepError.play();
    } else {
        game__winner.innerHTML = `No one is better, It's a tie!! haha`;
        tie.play();
    }

    console.log("The winner is : ", winner);
    console.log("user Counter ", userCounter, ",Ai Counter: ", AICounter);
}


// gameRun()

// rock + scissors = rock win
// paper + rock = paper win
// scissor + paper = scissors win


// rock + paper = rock loss
// paper + scissors = paper loss
// scissors + rock = scissors loss