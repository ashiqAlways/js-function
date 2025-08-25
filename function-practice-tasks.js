//---------- Task 01 --------------

function multiplyNum(num1, num2, num3, num4){
    return num1 * num2 * num3 * num4;
}

const result = multiplyNum(2, 5, 3, 5)
// console.log(result);


//---------- Task 02 --------------

function doMath(number){
    if(number % 2 === 1){
        return number * 2;
    }
    else{
         return number / 2;
    }
}

// console.log(doMath(9));
// console.log(doMath(100));


//---------- Task 03 --------------

function make_avg(arr, size){
    let sum = 0;
    for(let i = 0; i < size; i++){
        sum += arr[i];
    }
    let average = sum /size;
    return average;
}

const numbers = [2, 9, 8, 10];
const size = numbers.length;

// console.log(make_avg(numbers, size));



//---------- Task 04 -------------

function count_zero(binaryNum){
    let count = 0;
    for(let i = 0; i < binaryNum.length; i++){
        if(binaryNum[i] === '0'){
            count++;
        }
    }
    return count;
}

console.log(count_zero('1000100101010'));
