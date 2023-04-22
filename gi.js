// VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers.
// Example output: “The difference between 6 and 2 is 4”

var number1 = 6;

var number2 = 2;

console.log(
  `The difference betwween ${number1} and ${number2} is ${number1 - number2}`
);

// EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer,
//  and by how many characters.
// Example output: “The name Thomas is longer than John by 2 characters”

var person1 = "Abraham";

var person2 = "Maria";

console.log(`The name ${person1} is longer than ${person2} by 2 characters`);

// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase),
//  or neither. Use prompt to get user input, and then console log whether the user was shouting,
//  whispering, or talking normally.

function checkTone(x) {
  x = prompt(
    `What is your name please do not Shout (ALL CAPS) please do not Whisper(type in lowercase) please speak normally`
  ); //Prompt Tag

  if (x !== x.toUpperCase() && x !== x.toLowerCase()) {
    //Compares that if there is not both uppercase and lowercase the then conditon will be marked true and execute ok cool
    return (document.getElementById("checked").innerHTML = `Ok cool.`); //Neither
  } else if (x !== x.toLowerCase()) {
    //Compares that if it is not all Uppercases then condition is marked True, whcih will execute person is Shouting
    return (document.getElementById(
      "checked"
    ).innerHTML = `Ay man! I said dont SHOUT!`); //Shouting
  } else if (x !== x.toUpperCase()) {
    //Compares that if it is not all lowercase then condition will be marked True which will execute person is whispering
    return (document.getElementById("checked").innerHTML = `Ay man! Speak Up!`); // Whispering
  }
}

// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers,
//  one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

function add(x, y) {
  let check = x + y;

  return check;
}
function subtract(x, y) {
  let check = x - y;

  return check;
}
function multiply(x, y) {
  let check = x * y;

  return check;
}
function divide(x, y) {
  let check = x / y;

  return check;
}

// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /)
// and another number, and then uses the functions created in the hard challenge to output the value in sentence form.
//  Example output: "3 + 4 = 7"

function calculator(x, y) {
  x = prompt(`Choose a Number`);
  let operator = prompt(`Select a Operator: '+, -, * or /' `);
  y = prompt(`Choose another Number`);

  if (operator === "+") {

    let answer = add(+x, +y) //the "+" before the parameter will turn the string into a number to calculate it

    return (document.getElementById("calculator").innerHTML = `${x} ${operator} ${y} = ${answer}`);
  } else if (operator === "-") {

  answer = subtract(+x,+y)

    return (document.getElementById("calculator").innerHTML = `${x} ${operator} ${y} = ${answer}`);
  } else if (operator === "*") {

     answer = multiply(+x, +y)

    return (document.getElementById("calculator").innerHTML = `${x} ${operator} ${y} = ${answer}`);
  } else if (operator === "/") {

      answer = divide(+x, +y)
     
    return (document.getElementById("calculator").innerHTML = `${x} ${operator} ${y} = ${answer}`);
  } else {
    return "error try again";
  }
}
