const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Rock, Paper, Scissor Go! `, RPS);

function playNext (userAnswer) {
    if (userAnswer === "yes") {
      rl.question(`Rock, Paper, Scissor Go! `, RPS);
       

    } else {
        rl.close();
    }
1
}

function RPS(userChoice){

    let game=['rock','paper','scissors']
    let compRandom = game[Math.floor(Math.random()*game.length)];
       
    let userInput = userChoice.toLowerCase()
       if (userInput === compRandom) {
            console.log("Draw!")
            rl.question(`Rock, Paper, Scissor Go! `, RPS);
            rl.question(`Play Again? (yes/no)`,playNext);
                
        } else if (userInput === "rock" && compRandom === "scissors") {
            console.log(`Computer chose ${compRandom} - You win!`)
            rl.question(`Play Again? (yes/no)`,playNext);             
        } else if (userInput === "scissors" && compRandom === "paper") {
            console.log(`Computer chose  ${compRandom} - You win!`)
            rl.question(`Play Again? (yes/no)`,playNext); 
        } else if (userInput === "paper" && compRandom === "rock") {
            console.log(`Computer chose ${compRandom} - You win!`)
            rl.question(`Play Again? (yes/no)`,playNext);
        } else if (userInput === "rock" && compRandom === "paper") {
            console.log(`Computer chose ${compRandom} - You lose!`)
            rl.question(`Play Again? (yes/no)`,playNext);
        } else if (userInput === "scissors" && compRandom === "rock") {
            console.log(`Computer chose ${compRandom} - You lose!`)
            rl.question(`Play Again? (yes/no)`,playNext);
        } else if (userInput === "paper" && compRandom === "scissors") {
            console.log(`Computer chose ${compRandom} - You lose!`)
            rl.question(`Play Again? (yes/no)`,playNext);
        } else {
            console.log("You must choose rock, paper or scissors")
            rl.question(`Rock, Paper, Scissor Go! `, RPS)
        }

     
}


//console.log(RPS('rock'));

// user would put in rock, paper or scissors
// computer would pick a random from an array of 3, 
// in the function, it would say that if a user picked rock and the computer picked
// scissors, it would console log out "You won"
// repeat for each combination