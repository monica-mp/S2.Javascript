let num1 = parseInt(prompt("Introdueix un número:"));
let num2 = parseInt(prompt("Introdueix un altre número:"));


let resultat = (num1, num2) => (num1 > num2) ? `El ${num1} és més gran` : `El ${num2} és més gran`;
console.log(resultat(num1, num2));
