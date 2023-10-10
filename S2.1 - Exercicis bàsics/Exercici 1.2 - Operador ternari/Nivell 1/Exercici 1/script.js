let edat = parseInt(prompt("Introdueix la teva edat:"));

const potConduir = edat => (edat >= 18) ? "pot conduir" : "no pot conduir"; 
console.log(potConduir(edat));