const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function generate(length) {
  let result = " ";
  const lettersLength = letters.length;
  for (let i = 0; i < length; i++) {
    result += letters.charAt(Math.floor(Math.random() * lettersLength));
  }

  return result;
}
let randomthings = generate(200);

let bum = [];
for (let i = 0; i < randomthings.length; i++) {
  let the = randomthings[i];
}
console.log(the);
