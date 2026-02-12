/*
function sum (array){

let sumOfnumbers = array.reduce((a,b) => a + b);
console.log(sumOfnumbers)
}

sum([6,7,7])

function reduceMin(array){
    return array.reduce((a,b) => a < b ? `evens: ${a}` : `odds:${b}`);
}

console.log(reduceMin([2,3,4,5,1]))*/

const grades = [75, 60, 90, 80, 65, 95];
 
const getMax = grades.reduce((acc, el) => Math.max(acc,el));
console.log(getMax);

const scores = { math: 85, français: 92, histoire: 78 };

// Calculer la moyenne
const moyenne = Object.entries(scores).reduce((acc, [matiere, note]) => {
  return acc + note;
}, 0) / Object.keys(scores).length;


scores.forEach(element => console.log(`${matiere} : ${note} il faut beau aujourdui`));
let test = "Le branch marche tu?"