const liste1 = [-23,230,334,-90,-76,132,-77,305];

// exo1
let liste2 = liste1.filter(x => x > 0);
//console.log(liste2);

//exo2
let liste3 = liste1.filter(x => x % 2 ==0 && x > 0);
//console.log(liste3);

//exo3
let liste4 = liste1.filter(x => x % 10 != 0);
console.log(liste4);