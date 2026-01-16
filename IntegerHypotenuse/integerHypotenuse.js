// Ipotenusa intera
// Dati due numeri interi positivi che rappresentano le lunghezze dei due cateti (i due lati corti) di un triangolo rettangolo, determina se l'ipotenusa è un numero intero.

// La lunghezza dell'ipotenusa si calcola sommando i quadrati delle lunghezze dei due cateti e poi estraendo la radice quadrata del totale (a 2 + b 2 = c 2 ).

function isIntegerHypotenuse(a, b) {
const squareLeg1 = a*a;
const squareLeg2 = b*b;
let sum = squareLeg1 + squareLeg2;
const squareRoot = Math.sqrt(sum);
if(squareRoot % 1 !== 0){
 return false
}  else {
return true
}
}

console.log(isIntegerHypotenuse(3, 4));

console.log(isIntegerHypotenuse(2, 3));

console.log(isIntegerHypotenuse(5, 12));

console.log(isIntegerHypotenuse(10, 10));

console.log(isIntegerHypotenuse(780, 1040));

console.log(isIntegerHypotenuse(250, 333));