// 8. Remove the spaces found in a string
// Yet another way to clean up data is to remove any errors or unnecessary spaces.
//  This function will take in a string and then return it with all spaces removed. Think about if
//  you were tasked with cleaning up customer data at your job.
//  You could scale this function to clean up specific fields of data, such as zip codes.

function noSpace(x) {
  x = x.split(" ").join(""); //.split Turs the string into an array, then .join turns
  return x; // the array back into a string wiht no spaces since "" was added
}

console.log(noSpace("There are no spaces in this string"));













// 9. Return a Boolean if a number is divisible by 10
// Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output.
// The inputted number should only return a “true” if it’s divisible by 10. Otherwise, your program should return a “false” answer.

function divisibleBy10(x) {
  var checkWholeNumber = x % 10; //Remainder Operant " % " checks if there is a remainder, Variable will output 0 if divisble by 10, if not another number

  if (checkWholeNumber == 0) {
    //if and else statment if variable = 0 or not based on the output above first
    return true; //if 0 it will return true
  } else {
    return false; //if not 0 will return fals3
  }
}

console.log(divisibleBy10(10));

console.log(divisibleBy10(7));











// 10. Return the number of vowels in a string
// Create a function that’ll return an integer of the number of vowels found in a string.
//  This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career,
//  you’ll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge,
//  consider returning the number of characters.


function countVowel(x){

  var check = x.match(/[aeiou]/gi).length; //problem is solved using methods                               
                                           // .match is a method finds the specific charcters 
                                           // given in between the parenthesis and puts alll selccted items
                                           // and puts alll selccted itemsinto a tring
  return check;                            // .length turns the string to a number based on the characters in the string
}


console.log(countVowel('This has some vowels in the sentance'))
