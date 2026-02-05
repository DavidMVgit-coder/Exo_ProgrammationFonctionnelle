/*
function sum (array){

let sumOfnumbers = array.reduce((a,b) => a + b);
console.log(sumOfnumbers)
}

sum([6,7,7])*/

function reduceMin(array){
    return array.reduce((a,b) => a < b ? `evens: ${a}` : `odds:${b}`);
}

console.log(reduceMin([2,3,4,5,1]))