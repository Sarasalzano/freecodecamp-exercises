// Cercatore di giorni feriali
// Data una data stringa nel formato YYYY-MM-DD, restituisce il giorno della settimana.

// I giorni validi per il reso sono:

// "Sunday"
// "Monday"
// "Tuesday"
// "Wednesday"
// "Thursday"
// "Friday"
// "Saturday"
// Assicuratevi di ignorare i fusi orari.

function getWeekday(dateString) {
  // Aggiungo "T00:00:00Z" per ignorare il fuso locale
  const date = new Date(dateString + "T00:00:00Z");
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

console.log(getWeekday("2025-11-06"));

console.log(getWeekday("1999-12-31"));

console.log(getWeekday("1111-11-11"));

console.log(getWeekday("2112-12-21"));

console.log(getWeekday("2345-10-01"));
