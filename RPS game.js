let userscore=0;
let compscore=0;
let userscorepara=document.querySelector("#user-score")
let compscorepara=document.querySelector("#comp-score")

const msg= document.querySelector("#msg");

const getCompChoice=()=>
{
    let option=["rock","paper","scissors"];
     const randidx=Math.floor(Math.random()*3);
     return option[randidx];

}
const drawgame=()=>{
    console.log("game was draw");
     msg.innerText=" Game was draw. Play again";
}
const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin)
    { userscore++;
        userscorepara.innerText= userscore;
        console.log("you win");
        msg.innerText =`YOU WIN ! YOUR ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    { compscore++;
       compscorepara.innerText=compscore;
        console.log("you loss");
        msg.innerText=` YOU LOSS ! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }

  
}
const playgame=(userchoice)=>{
    console.log("user choices is ", userchoice)  // userchoice
     
    // computer choice
    const compChoice= getCompChoice();
    console.log("computer choice" , compChoice);
    if(userchoice===compChoice)
    {
        drawgame();
       
    }
    else{
        let userwin=true;
        if(userchoice==="rock")
        {// scissor, paper
            userwin= compChoice==="paper" ? false: true;
        }
        else if(userchoice==="paper")
        {
            // scissor, rock
            userwin=compChoice==="scissors" ? false:true;
        }
        else{//  userchoice=== scissor
            // paper,rock
            userwin=compChoice==="rock"  ? false:true;
        }
        showWinner(userwin,userchoice,compChoice);
    }


};
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute("id")
        playgame(userchoice)
        
    })
})


