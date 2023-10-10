function suma (a, b, ...c){
    let resultat = a + b;

    c.forEach(num => {
        resultat += num;
    });

    return resultat;
    
}

console.log(suma(1, 2, 3, 4, 5, 6));
console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));