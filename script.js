let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#userScore");
const compScorepara = document.querySelector("#compScore");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "black";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("you Win");
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("You lose");
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame =(userChoice) =>{
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp choice - scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //computer choice- rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{//user choice- scissors
            //comp choice- rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choices was clicked",userChoice);
        playGame(userChoice);
    })
})