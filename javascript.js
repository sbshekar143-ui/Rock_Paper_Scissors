let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const scoreboard = document.querySelectorAll(".scoreboard");
const winner = document.querySelector(".showwinner");
const yourscore = document.querySelector("#userscore");
const computerscore = document.querySelector("#compscore");



const gencompchoice = ()=>{
    const options = ["rock","paper","scissors"];
    return options[Math.floor(Math.random()*3)] ;
    
    
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log("userchoice = ",userchoice);
        gameplay(userchoice);
    });

});

const gameplay = (userchoice)=>{
    
    const compchoice = gencompchoice();
    console.log("compchoice = ",compchoice);
    if (userchoice === compchoice){
        winner.innerText="Game Draw";
        winner.style.backgroundColor="darkblue";
    }else if(userchoice === "rock" && compchoice === "paper"){
        winner.innerText="You lose Paper beats Rock";
        winner.style.backgroundColor="red";
        compscore++;
    }else if(userchoice === "rock" && compchoice === "scissors"){
        winner.innerText="You win rock beats scissors";
        winner.style.backgroundColor="green";
        userscore++;
    }else if(userchoice === "paper" && compchoice === "scissors"){
        winner.innerText="You lose Scissors beats Paper";
        winner.style.backgroundColor="red";
        compscore++;
    }else if(userchoice === "paper" && compchoice === "rock"){
        winner.innerText="You win paper beats rock";
        winner.style.backgroundColor="green";
        userscore++;
    }else if(userchoice === "scissors" && compchoice === "rock"){
        winner.innerText="You lose Rock beats scissors";
        winner.style.backgroundColor="red";
        compscore++;
    }else if(userchoice === "scissors" && compchoice === "paper"){
        winner.innerText="You win scissors beats paper";
        winner.style.backgroundColor="green";
        userscore++;
    }
    yourscore.innerText = `${userscore}`;
    computerscore.innerText = `${compscore}`;
};

