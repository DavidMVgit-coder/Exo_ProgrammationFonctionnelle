/*
exo6
const liste1 = ['ami','carotte','midi','toujours','hier','demain'];
let liste2 = liste1.map(x => x.length);
console.log(liste2);

exo 7
const liste1 = [-23,230,334,-90,-76,132,-77,305]
let liste2 = liste1.map(x => x ** 2);
console.log(liste2);

exo8
const liste1 = [
    {"nom":"Charity","prenom":"Selar","email":"cselar0@cloudflare.com"},
    {"nom":"Noel","prenom":"Jermy","email":"njermy1@bbb.org"},
    {"nom":"Killian","prenom":"Keri","email":"kkeri2@sphinn.com"},
    {"nom":"Aleta","prenom":"Thurl","email":"athurl3@bandcamp.com"},
    {"nom":"Edna","prenom":"Ingyon","email":"eingyon4@telus.ca"}
]

let liste2 = liste1.map(x => x.prenom);
console.log(liste2);
*/

const liste1 = [-23, 230, 334, -90, -76, 132, -77, 305]
let liste2 = liste1.filter(x => x % 2 == 0)
    .map(x => x ** 2)
    .reduce((x,y) => x + y);
console.log(liste2);

liste1.forEach(display);
function display(element){
    console.log(element);
}

