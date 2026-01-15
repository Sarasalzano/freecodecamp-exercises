// Dato un array con due valori, restituisci un array con i valori scambiati.
// Ad esempio, dato ["A", "B"]return ["B", "A"].

function arraySwap(arr) {
  let newArray=[];
for(let i=arr.length-1; i>=0 ; i--){
  // Prendi l'elemento in posizione i dell'array originale e aggiungilo al nuovo array
  newArray.push(arr[i])
}
  return newArray;
}
console.log(arraySwap(["A", "B"]));

console.log(arraySwap([true, false]));

console.log(arraySwap(["1", 1]));