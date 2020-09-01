# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

## Looping Practice Exercise

#### Setup

1. Fork and Clone this repo to your machine.
1. Complete your work in `exercises.js`
1. Remember to practice good git work flow by committing often.  

#### Exercise 1
1. Declare a variable called `temp` and set it to 32.
1. Write an if statement and determine a condition where:
    - If the temp is less than or equal to 32, write to the console "Watch out for ice".
    - If the temp is between 33 and 55, write to the console "Better put on a jacket"
    - If the temp is between 56 and 70, write to the console "Such nice weather we're having"
    - If the temp is between 71 and 99, write to the console "Summer is here"
    - If the temp is either 212 or 444, write to the console "Where are you exactly?"
    - Finally, if the temp is above 99 write "Global Warming!"
1. Change the temp variable to make sure all conditions are met.

#### Exercise 2

1. Declare a variable called `date` and get the current date (you may need to research the `Date` method on MDN or W3Schools).
1. Using your `date` variable, find a method to **get** the current month. Save that value to a variable called `month`. 
1. Write `month` to the console and note it's return value. Notice something odd? Adjust it so it reflects the current months' number.
1. Set a new variable called `isSeptember` and set it equal to a ternary operator that determines if  `month` equals 1. If true, have the statement return 'It is January' and 'It isn't January', if false.
1. How can we include an apostrophe in a string with single quotes? (you may need to research this).
1. Console log `isSeptember`

#### Exercise 3
1. Given the following array, write a switch/case statement and determine an output based on each array item.  
`let foodsArray = ['almonds', 'potato chips', 'ice cream', 'filet mignon'];`
1. Things to think about:
    - How can we determine the value of each item in the array?
    - How can we access a specific item in the array for each case?
1. If the condition met is equal to almonds, print 'That's a healthy snack' to the console.
1. If the condition met is equal to potato chips, print 'Something salty, nice!'
1. If the condition met is equal to ice cream,
print 'Something sweet, ok!'
1. If the condition met is equal to filet mignon, print 'Eating like royalty tonight'
1. The statement should default to 'I don't know what to eat.'

#### Exercise 4

1. You just got paid! Write a while loop that will set an `accountBalance` variable up to and including 100.
    - What should `accountBalance` be initialized to?
    - Where in the scope of the while loop should this be initialized?
1. Print the balance to the console in a variable called `message` and start it with the string `'My checking account balance is $'`.
    - What should `message` be initialized to?
    - Where in the scope of the while loop should this be initialized?
1. How can we print a newline in JavaScript? (Ok, this one is for free, '\n').

### Bonus

1. Given the following array,  
 `let fishArray = ["Cod", "Tuna", "Salmon", "Swordfish"];`
    - Loop through the array to find the longest word by how many letters each string contains.
    - What other variables will you need?
1. Print the length of the longest word to the console.
1. Print the longest word to the console.

### Bonus 2
1. Write a function `findDup` that takes an array of number as an argument.  `findDup` should return the first duplicate number in the array, e.g., [1, 4, 2, 5, 3, 5] should return `5`.

### Bonus 3
Write a function `sumPrimes` that takes a single argument `n` and returns the sum of the first `n` prime numbers.

Since the first prime number is 2, if `sumPrimes` is called with 1 as its argument, then it should return 2 (the sum of the first prime is just 2).  If `sumPrimes` is called with 3 as its argument, then it should compute the sum of the first 3 prime numbers (2, 3, and 5) => 10.
