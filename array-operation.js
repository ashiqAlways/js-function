/**
 * Objective: write a function to give me the sum of all numbers in an array.
 * Step-1: Declare a function.
 * Step-2: Call check whether the function is called properly
 * Step-3: Set a parameter(s)
 * Step-4: Pas the parameter(s), check whether parameter is passed in a proper formate
 * Step-5: Do the function tasks (step by step)
 */



function sumOfNamber(numbers){
    let sum = 0;
    for(const number of numbers){
        // console.log(number)
        sum = sum + number;
    }
    return sum;
}

const numbs = [65, 32, 28, 76, 9];
const total = sumOfNamber(numbs);
console.log('sum of numbers is', total);