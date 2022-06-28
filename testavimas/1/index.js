let text = document.getElementById("text");

let firstName = prompt("iveskite savo varda");
let lastName = prompt("iveskite savo pavarde");
let year = prompt("iveskite gimimo metus");

// console.log(
//   `aš esu ${firstName + " " + lastName + " "} man yra ${2022 - year} metu`
// );

text.innerHTML = `<h1>aš esu ${firstName + " " + lastName + " "} man yra ${
  2022 - year
} metai</h1>`;
