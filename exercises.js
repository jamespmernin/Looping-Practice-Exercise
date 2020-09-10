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
let date = new Date(); // defaults to Date.now(), the current date
let month = date.getMonth() + 1;
console.log(`The (numerical) month is ${month}.`);
let isSeptember = (month === 1) ? "It is January" : "It isn't January";
console.log(isSeptember);

//Exercise 3
let foodsArray = ['almonds', 'potato chips', 'ice cream', 'filet mignon'];
for (let i = 0; i < foodsArray.length; i++) {
  switch (foodsArray[i]) {
    case 'almonds':
      console.log("That's a healthy snack.");
      break;
    case 'potato chips':
      console.log("Something salty, nice!");
      break;
    case 'ice cream':
      console.log("Something sweet, ok!");
      break;
    case 'filet mignon':
      console.log("Eating like royalty tonight.");
      break;
    default:
      console.log("I don't know what to eat.");
      break;
  }
}

//Exercise 4
let accountBalance = 0;
while (accountBalance <= 100) {
  let message = `My checking account balance is $${accountBalance}!\n`;
  console.log(message);
  accountBalance += 10;
}

//Bonus 1
let fishArray = ["Cod", "Tuna", "Salmon", "Swordfish"];
let longestWord = '';
for (let i = 0; i < fishArray.length; i++) {
  if (fishArray[i].length > longestWord.length) {
    longestWord = fishArray[i];
  }
}
console.log(`The length of the longest word is ${longestWord.length} and the longest word is ${longestWord}.`)

//Bonus 2
function findDup(numArray) {
  for (let i = 0; i < numArray.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numArray[i] === numArray[j]) {
        return numArray[i];
      }
    }
  }
}

myNumArray = [1, 4, 2, 5, 3, 5, 3];
dupNumber = findDup(myNumArray);
console.log(`The first duplicate number found is ${dupNumber}.`);

//Bonus 3
function sumPrimes(n) {
  let sum = 0;
  let primes = firstNPrimes(n);
  for (let i = 0; i < primes.length; i++) {
    sum += primes[i];
  }
  return sum;
}

/* 
 * The isPrime() and firstNPrimes() functions are courtesy of
 * https://repl.it/@alexhc/returns-an-array-of-the-first-n-prime-numbers#main.js
 */
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function firstNPrimes(n) {
  let primes = [];
  let num = 2;

  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }

    num += 1;
  }

  return primes;
}

console.log(`The sum of the first 1 prime numbers is ${sumPrimes(1)}.`); // should be 2
console.log(`The sum of the first 2 prime numbers is ${sumPrimes(2)}.`); // should be 5
console.log(`The sum of the first 5 prime numbers is ${sumPrimes(5)}.`); // should be 28
console.log(`The sum of the first 10 prime numbers is ${sumPrimes(10)}.`); // should be 129