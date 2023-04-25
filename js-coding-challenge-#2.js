


// Create a function that filters out negative numbers
// In this challenge, you’ll have a function that takes an array as input and returns an array.
//  But if all goes according to plan, it’ll remove the negative numbers. 
// This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”



let minusNegative = x => x >= 0

let newArr = [];

function noBadVibes(x){

return x.filter(minusNegative)

}

newArr = [4,-5,6,-7,8,-9,10]

console.log(noBadVibes(newArr))

