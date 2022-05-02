"use strict";

// TODO - write your code here.

const randomDamage = () => Math.trunc(Math.random() * 10 + 1);

console.log("random damage:", randomDamage());

const chooseOption = (opt1, opt2) => {
  let randNum = Math.round(Math.random());
  return randNum === 0 ? opt1 : opt2;
};

console.log(chooseOption("red", "blue"));
