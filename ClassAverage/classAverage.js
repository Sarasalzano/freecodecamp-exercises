// Media della classe
// Dato un array di punteggi d'esame (numeri), restituire il punteggio medio sotto forma di voto in lettere secondo la seguente tabella:

// Punteggio medio	Grado di lettera
// 97-100	"A+"
// 93-96	"A"
// 90-92	"A−"
// 87-89	"B+"
// 83-86	"B"
// 80-82	"B-"
// 77-79	"C+"
// 73–76	"C"
// 70-72	"C-"
// 67-69	"D+"
// 63-66	"D"
// 60–62	"D-"
// sotto i 60	"F"
// Calcola la media sommando tutti i punteggi nella matrice e dividendo per il numero totale di punteggi.

function getAverageGrade(scores) {
  // calcola media con reduce: somma / lunghezza array
  const media = scores.reduce((acc, num) => acc + num, 0) / scores.length;

  // Assegna voto partendo dal più alto
  if (media >= 97) {
    return "A+";
  } else if (media >= 93) {
    return "A";
  } else if (media >= 90) {
    return "A-";
  } else if (media >= 87) {
    return "B+";
  } else if (media >= 83) {
    return "B";
  } else if (media >= 80) {
    return "B-";
  } else if (media >= 77) {
    return "C+";
  } else if (media >= 73) {
    return "C";
  } else if (media >= 70) {
    return "C-";
  } else if (media >= 67) {
    return "D+";
  } else if (media >= 63) {
    return "D";
  } else if (media >= 60) {
    return "D-";
  } else if (media < 60) {
    return "F";
  }
}

console.log(getAverageGrade([92, 91, 90, 94, 89, 93]));

console.log(getAverageGrade([84, 89, 85, 100, 91, 88, 79]));

console.log(getAverageGrade([63, 69, 65, 66, 71, 64, 65]));

console.log(getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100]));

console.log(getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60]));

console.log(getAverageGrade([45, 48, 50, 52, 100, 54, 56, 58, 59]));
