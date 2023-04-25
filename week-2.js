// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

function min(x, y) {
  return Math.min(x, y);
}

console.log(min(3, 5));
console.log(min(8, 6));

// EASY: Create an array of students holding their last name, first name, and age with 3 students.
// To validate, please log a greeting with the first name, last name and age of the 2nd student.
// The output should look like "Hello, my name is John Doe and I'm 19 years old."

let student1 = ["Abraham Varguez", 25];

let student2 = ["Maria Belen", 30];

let student3 = ["Johnny Appleseed", 45];

let students = [student1, student2, student3];

console.log(
  `Hello, my name is ${students[1][0]} and I'm ${students[1][1]} years old`
);

// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month.
// For example: if the user enters the number 3, then it should return the month “March.”
// Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

function findMonth(x) {
  x = prompt(`Choose your favorite month: Type Number "1 - 12"`);

  if (+x === 1) {
    return (document.getElementById("month").innerHTM = "January");
  } else if (+x === 2) {
    return (document.getElementById("month").innerHTML = "Feburary");
  } else if (+x === 3) {
    return (document.getElementById("month").innerHTML = "March");
  } else if (+x === 4) {
    return (document.getElementById("month").innerHTML = "April");
  } else if (+x === 5) {
    return (document.getElementById("month").innerHTML = "May");
  } else if (+x === 6) {
    return (document.getElementById("month").innerHTML = "June");
  } else if (+x === 7) {
    return (document.getElementById("month").innerHTML = "July");
  } else if (+x === 8) {
    return (document.getElementById("month").innerHTML = "August");
  } else if (+x === 9) {
    return (document.getElementById("month").innerHTML = "September");
  } else if (+x === 10) {
    return (document.getElementById("month").innerHTML = "October");
  } else if (+x === 11) {
    return (document.getElementById("month").innerHTML = "November");
  } else if (+x === 12) {
    return (document.getElementById("month").innerHTML = "December");
  } else {
    return alert("Bro... Please listen I said 1-12. c'mon now!");
  }
}

// HARD: Given the information below for Tom and Jerry.
// Tom - 	height:  9in   	mass: 8 g
// Jerry - 	height: 10in 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:

//                           Mass=

// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s.
// Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry.
//  Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

const tomHeight = 9;

let tomMass = 8;

const jerryHeight = 10;

let jerryMass = 45;

let tomBMI = tomMass / tomHeight ** 2;

let jerryBMI = jerryMass / jerryHeight ** 2;

let checkHigherBMI = tomBMI > jerryBMI;

console.log(`Is Tom's BMI higher than Jerry's? Answer: ${checkHigherBMI}`);
