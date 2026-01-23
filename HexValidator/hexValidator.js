// Validatore esadecimale

// Data una stringa, determina se si tratta di un colore esadecimale CSS valido. Un colore esadecimale CSS valido deve:

// Iniziare con una #, e
// essere seguito da 3 o 6 caratteri esadecimali.
// I caratteri esadecimali sono numeri 0e 9lettere (senza distinzione tra maiuscole e minuscole) a.f

function isValidHex(str) {
//Controlla colore HEX: deve iniziare con # + 3 o 6 caratteri (0-9, a-f, A-F)    
const regex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
let match= str.match(regex);
if (!match) {
  return false
} else {
  return true
}
}

console.log(isValidHex("#123"));

console.log(isValidHex("#123abc"));

console.log(isValidHex("#ABCDEF"));

console.log(isValidHex("#0a1B2c"));

console.log(isValidHex("#12G"));

console.log(isValidHex("#1234567"));

console.log(isValidHex("#12 3"));

console.log(isValidHex("fff"));