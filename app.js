// Selecting dom elements
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Adding event listeners
rock.addEventListener("click", handleRock);
paper.addEventListener("click", handlePaper);
scissors.addEventListener("click", handleScissors);


// declearing variables
let userSelection = "";
let AISelection = "";
let userCounter = 0;
let AICounter = 0;

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