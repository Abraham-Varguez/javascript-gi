//EASY------------------------------------------------------------------------------------------------------------------

//Higher Order Functions
// Need to create the exercise function that returns another funciton and turns the variable into that function
function exercise(x) {
  //anynokous function inside the function that turns that variable into the anynomous function
  return function () {
    return `Today's exercise: ${x}`;
  };
}
//by setting the variable "run" to = exercise function it turns the var run into the anynonnymous function
var run = exercise("running");
var swim = exercise("swimming");
// console.log(run());
// console.log(swim());

//MEDIUM------------------------------------------------------------------------------------------------------------------
// Same as easy but instead of priting a string you will divide the parameters to output the results to the console

function cutPizzaSlices(x) {
  return function (y) {
    return `Each person gets ${x / y} slices of pizza`;
  };
}

var sharePizza = cutPizzaSlices(8);

// console.log(sharePizza(2));
// console.log(sharePizza(3));

//HARD------------------------------------------------------------------------------------------------------------------

const pii = {
  name: "Abraham",
  ssn: "$123-45-6789",
};

//VERY HARD------------------------------------------------------------------------------------------------------------------

class Person {
  constructor(name, job, age, langauges) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.langauge = [langauges];
  }

  excercise() {
    console.log(`Running is fun said no one ever!`);
  }

  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}
//Number 4 Part 2
Person.prototype.isBusy = true;

//Number 5
Person.prototype.completeTask = function () {
  if (this.isBusy) {
    console.log(`${this.name} completed Task and is not busy`);
    this.isBusy = false;
  }
};

//Number 6
Person.prototype.offerNewTask = function () {
  if (this.isBusy) {
    console.log(`${this.name} can't accept any new tasks right now`);
  } else {
    console.log(`${this.name} would love to take on a new responsibility`);
    this.isBusy = true;
  }
};


//Number 4 Part 1 
Person.prototype.langauges = function () {
  console.log(`${this.name} knows ${this.langauge.length} coding languages`);
};

//Number 7
Person.prototype.learnLanguage = function (x) {
  this.langauge.push(x);
};

//Number 7
Person.prototype.listLanguages = function () {
  console.log(`These are the languages ${this.name} writes: ${this.langauge}`);
};



// Calling the Class
const programmer = new Person("Abraham", "Coding Apprentice", 25, "Javascript");





// const programmer1 = new Person("Maraia", "Pharmacy-Tech", 25, "Spanish");


// console.log(programmer);

// programmer.fetchJob();

// programmer.excercise();

// console.log(programmer.isBusy)

// programmer.completeTask();

// console.log(programmer.isBusy);
// programmer.offerNewTask();

// programmer.offerNewTask();

// programmer.langauges()
// programmer.listLanguages();

programmer.learnLanguage('HTML')
programmer.learnLanguage('SASS')
programmer.learnLanguage('React')

programmer.langauges();
programmer.listLanguages();

// programmer1.langauges();
// programmer1.listLanguages();


