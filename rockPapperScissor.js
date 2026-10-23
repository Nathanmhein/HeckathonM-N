const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Rock, Paper, Scissor Go! `, RPS);

function playNext (userAnswer) {
    userAnswer = userAnswer.toLowerCase()
    if (userAnswer === "y") {
      rl.question(`Rock, Paper, Scissor Go! `, RPS);
    } else if (userAnswer === "n") {
        rl.close();
    } else {
       rl.question(`Play Again? (y/n)`,playNext)
    }

}

function RPS(userChoice){

    let game=['rock','paper','scissors']
    let compRandom = game[Math.floor(Math.random()*game.length)];
       
    let userInput = userChoice.toLowerCase()
       if (userInput === compRandom) {
            console.log("Draw!")
            rl.question(`Rock, Paper, Scissor Go! `, RPS);
            rl.question(`Play Again? (y/n)`,playNext);
                
        } else if (userInput === "rock" && compRandom === "scissors") {
            console.log(`Computer chose ${compRandom} - You win!`)
            rl.question(`Play Again? (y/n) `,playNext);             
        } else if (userInput === "scissors" && compRandom === "paper") {
            console.log(`Computer chose  ${compRandom} - You win!`)
            rl.question(`Play Again? (y/n) `,playNext); 
        } else if (userInput === "paper" && compRandom === "rock") {
            console.log(`Computer chose ${compRandom} - You win!`)
            rl.question(`Play Again? (y/n) `,playNext);
        } else if (userInput === "rock" && compRandom === "paper") {
            console.log(`Computer chose ${compRandom} - You lose!`)
            rl.question(`Play Again? (y/n) `,playNext);
        } else if (userInput === "scissors" && compRandom === "rock") {
            console.log(`Computer chose ${compRandom} - You lose!`)
            rl.question(`Play Again? (y/n) `,playNext);
        } else if (userInput === "paper" && compRandom === "scissors") {
            console.log(`Computer chose ${compRandom} - You lose!`)
            rl.question(`Play Again? (y/n) `,playNext);
        } else {
            console.log("You must choose rock, paper or scissors")
            rl.question(`Rock, Paper, Scissor Go! `, RPS)
        }

     
}




