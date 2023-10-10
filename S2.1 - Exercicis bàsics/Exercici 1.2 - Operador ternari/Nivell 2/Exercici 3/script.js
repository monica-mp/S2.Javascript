let num = parseInt(prompt("Introdueix un número:"));

const numero = (num > 0) ? "Positiu" : (num < 0) ? "Negatiu" : "Zero";
console.log(numero);

// --------------------------------------------------------------------

let a = parseInt(prompt("Introdueix un número:"));
let b = parseInt(prompt("Introdueix un altre número:"));
let c = parseInt(prompt("Introdueix un altre número:"));
const trobarMaxim = (a, b, c) => {
    const maxim = (a > b) ? (a > c) ? a : c : (b > c) ? b : c;
    return maxim;
}

console.log(`El número màxim és: ${trobarMaxim(a, b, c)}`);