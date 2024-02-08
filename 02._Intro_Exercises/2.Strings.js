// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

const resultEx3 = Number(numberTwo) + Number(numberTwo);
console.log(resultEx3);

// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

let resultEx4 = (Number(anotherNumberOne) + Number(anotherNumberTwo)).toFixed(2);

console.log(resultEx4);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

resultEx5 = ((10+45+98)/3).toFixed(3);

console.log(resultEx5)



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

resultEx5 = letters.charAt(2);
//letters[2]
//letters.substring(2,3)
//letters.slice(2)

console.log(resultEx5);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

const resultEx6 = fact.slice(0,17) + "J" + fact.slice(18);

console.log(resultEx6);

//fact.replace("j","J");


// capitalize the J in Javascript

// --------------------------------------