console.log("hello");

function getRandom(min, max) {
  min = math.ceil(min);
  max = math.floor(max);
  return Math.floor(math.random() * (max - min + 1) + min);
}

const numberOne = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1;
const numberTwo = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1;
const numberThree = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1;
const numberFour = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1;
const numberFive = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1;
const numberSix = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1;

let array = [];
let numbers = [
  numberOne,
  numberTwo,
  numberThree,
  numberFour,
  numberFive,
  numberSix,
];
let highestToLowest = numbers.sort((a, b) => b - a);
console.log(highestToLowest);
let highestAsString = highestToLowest.join(", ");
text.innerHTML = `Skaičiai ${highestAsString}`;

// console.log(
//   numberOne,
//   numberTwo,
//   numberThree,
//   numberFour,
//   numberFive,
//   numberSix
// );
