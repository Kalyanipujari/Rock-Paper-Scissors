let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetScore = document.querySelector("#resetBtn");

const generateCompChoice = () => {
        //rock, paper, scissors
        let options = ["rock", "paper", "scissors"];
        //Why using array there is no straight forward way of selecting any value from string 
        //So we can use array and random() and use the random num as index
        //we need to generate value from 0 to 2 so multiply random * 3 to get value till 2
        //.floor is used to remove decimal points
        const randomIdx = Math.floor(Math.random()*3);
        return options[randomIdx];
};


const drawGame = () =>{
    msg.innerText="Game was draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText= `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    const compChoice = generateCompChoice();
    if(userChoice == compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == rock)
        {
            userWin = compChoice=="paper" ? false : true;
        }
        else if(userChoice == "paper")
        {
            userWin = compChoice=="scissors"? false : true;
        }
        else{
                //rock, paper
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetScore.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    compScorePara.innerText = "0";
    userScorePara.innerText="0";
    msg.innerText="Play your move";
    msg.style.backgroundColor = "#081b31"
});