//Exercise 1
let temp = 200;
if (temp <= 32) {
  console.log("Watch out for ice.");
} else if (temp <= 55) {
  console.log("Better put on a jacket.");
} else if (temp <= 70) {
  console.log("Such nice weather we're having.");
} else if (temp <= 99) {
  console.log("Summer is here.");
} else if (temp === 212 || temp === 444) {
  console.log("Where are you exactly?");
} else {
  console.log("Global warming!");
}

//Exercise 2
let date = new Date(Date.now());
let month = date.getMonth() + 1;
console.log(month);
let isSeptember = (month === 1) ? "It is January" : "It isn't January";
console.log(isSeptember);

//Exercise 3


//Exercise 4


//Bonus
