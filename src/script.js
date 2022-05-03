"use strict";

// TODO - write your code here.

const randomDamage = () => Math.trunc(Math.random() * 10 + 1);

// console.log("random damage:", randomDamage());

const chooseOption = (opt1, opt2) => {
  let randNum = Math.round(Math.random());
  return randNum === 0 ? opt1 : opt2;
};

console.log(chooseOption("red", "blue"));

const attackPlayer = function (health) {
  return health - randomDamage();
};

// console.log(attackPlayer(20));

const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

// logHealth("katie", 20);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

logDeath("katie", "tom");

const isDead = (health) => (health <= 0 ? true : false);

console.log(isDead(5));

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health) === true) {
        logDeath(player2, player1);
        break;
      }
    }
    if (player1Health <= 0 || player2Health <= 0) {
      break;
    }
  }
}

fight("tom", "katie", 30, 30);

//ROCK PAPER SCISSORS

// const rockPaperScissors = (player1Selection, player2Selection) => {
//   if (player1Selection === player2Selection) {
//     console.log(`It's a tie!`);
//   } else if (player1Selection === "rock" && player2Selection === "scissors") {
//     console.log(`Player 1 wins the round`);
//   } else if (player1Selection === "paper" && player2Selection === "rock") {
//     console.log(`Player 1 wins the round`);
//   } else if (player1Selection === "scissors" && player2Selection === "paper") {
//     console.log(`Player 1 wins the round`);
//   } else if (player2Selection === "paper" && player1Selection === "rock") {
//     console.log(`Player 2 wins the round`);
//   } else if (player2Selection === "scissors" && player1Selection === "paper") {
//     console.log(`Player 2 wins the round`);
//   } else if (player2Selection === "rock" && player1Selection === "scissors") {
//     console.log(`Player 2 wins the round`);
//   }
// };

// rockPaperScissors("rock", "paper");
// rockPaperScissors("scissors", "scissors");

// const player1Random = function () {
//   return Math.trunc(Math.random() * 3 + 1);
// };

// const player2Random = function () {
//   return Math.floor(Math.random() * 3 + 1);
// };

// let player1Hand;
// let player2Hand;

// if (player1Random() === 1) {
//   player1Hand = "rock";
// } else if (player1Random === 2) {
//   player1Hand = "paper";
// } else {
//   player1Hand = "scissors";
// }

// if (player2Random() === 1) {
//   player2Hand = "rock";
// } else if (player2Random === 2) {
//   player2Hand = "paper";
// } else {
//   player2Hand = "scissors";
// }

// console.log(player1Random());
// console.log(player2Random());
// console.log(player1Hand);
// console.log(player2Hand);
// rockPaperScissors(player1Hand, player2Hand);
