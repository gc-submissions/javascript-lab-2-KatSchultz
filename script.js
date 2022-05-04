"use strict";

// TODO - write your code here.

const randomDamage = () => Math.trunc(Math.random() * 10 + 1);

// console.log("random damage:", randomDamage());

const chooseOption = (opt1, opt2) => {
  let randNum = Math.round(Math.random());
  return randNum === 0 ? opt1 : opt2;
};

// console.log(chooseOption("red", "blue"));

const attackPlayer = function (health) {
  return health - randomDamage();
};

// console.log(attackPlayer(20));

const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

// logHealth("katie", 20);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

// logDeath("katie", "tom");

const isDead = (health) => (health <= 0 ? true : false);

// console.log(isDead(5));

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

fight("Katie", "Tom", 30, 30);

//EXTENDED CHALLENGES
//printSquare
//make empty string
//add width number of # to string
//print string of # width number of times

const printSquare = function (width) {
  let size = "";
  for (let i = 1; i <= width; i++) {
    size += "#";
  }
  for (let i = 1; i <= width; i++) {
    console.log(size);
  }
};

printSquare(4);

//printTriangle
//make empty string
//add # and print every loop

const printTriangle = function (width) {
  let str = "";
  for (let i = 1; i <= width; i++) {
    str += "#";
    console.log(str);
  }
};

printTriangle(4);

//printRectangle
//function takes widht and height
//create empty string
//create for loop
//add # = width
//create new for loop
//print height times

const printRectangle = function (width, height) {
  let str = "";
  for (let i = 1; i <= width; i++) {
    str += "#";
  }
  for (let i = 1; i <= height; i++) {
    console.log(str);
  }
};

printRectangle(5, 3);

//getGrade
//function accepts 1 parameter
//if 90-100 return A
//if 80-89 return B
//if 70-79 return C
//if 60-69 return D
//if 0-59 return F

const getGrade = function (number) {
  if (number >= 90 && number <= 100) {
    return "A";
  } else if (number >= 80 && number <= 89) {
    return "B";
  } else if (number >= 70 && number <= 79) {
    return "C";
  } else if (number >= 60 && number <= 69) {
    return "D";
  } else if (number >= 0 && number <= 59) {
    return "F";
  } else {
    return "Must input grade between 0-100";
  }
};

console.log(getGrade(50));
console.log(getGrade(76));
console.log(getGrade(100));
console.log(getGrade(80));
