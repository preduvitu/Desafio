
/* LISTA  */

const lista = [6,2,8,3,1,4,3,2];

const sorted = lista.sort((a,b) => a - b) 
            && lista.filter( (elem, index, arr) => arr.indexOf(elem) === index);

console.log(sorted);
