
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let firstCard;
let secondCard;
let randomCard; 
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "J", "Q", "K"]

let dealerCard=0;

while(dealerCard<=21){
    let randomDealer=cards[Math.floor(Math.random()*cards.length)];
    if (randomDealer==='J'|| randomDealer==='Q' || randomDealer==='K')
     dealerCard += 10;
    else dealerCard+=randomDealer;
}




let randomOne=cards[Math.floor(Math.random()*cards.length)];
let randomTwo=cards[Math.floor(Math.random()*cards.length)];
if (randomOne==='J'|| randomOne==='Q' || randomOne==='K')
    firstCard = 10;
else firstCard=randomOne;

if (randomTwo==='J'|| randomTwo==='Q' || randomTwo==='K')
    secondCard = 10;
else secondCard=randomTwo;
     

console.log(`Your cards: ${randomOne} and ${randomTwo}`);
console.log(`Total: ${firstCard+secondCard}`);


console.log(`Dealer's card: ${dealerCard}`)



let combinedCards = firstCard + secondCard;
if (combinedCards === 21) {
console.log("You win!")
} else if (combinedCards < 21) {
        rl.question(`Hit or Stand? `, checkHitOrStand);
} else {
    console.log("You lose!")
}


function checkHitOrStand(choice){
    if (choice=='Hit'){
        let random=cards[Math.floor(Math.random()*cards.length)];
        if (random==='J'|| random ==='Q' || random ==='K')
        random = 10;
        else randomCard=random;
        combinedCards+=random;
        console.log(`Your new Card: ${random}`);
        console.log(`Total: ${combinedCards}`)
        if (combinedCards < 21) {
            rl.question(`Hit or Stand? `, checkHitOrStand);
        } else if (combinedCards === 21) {
            console.log("You win!")
        } else {
           console.log("You lose")
           rl.close();
        }
    }
    else
         rl.close();
        
}






/** We need an array of numbers from 1 to 11, with 4 10s
 * we need to show the user 2 of these random cards then
 * ask the user if they'd like another card or to stand
 * if the cards add up to 21, print "You win", if they don't
 * they can add another card or stand again.
 * 
 * At the start the computer will have one visible random card,
 * when the player is either out or has decided to stand, 
 * the computer will get another card. if it is under 17 they will
 * get another card, if it is over 17 and closer to 21 than the 
 * user's card, the dealer will win. If the computer goes over 
 * 21, the user wins
 */