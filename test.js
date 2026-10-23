const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



function greetUser(name){

    console.log(`Hi ${name}!`);
    rl.close();

};

rl.question(`What's your name?`, greetUser);