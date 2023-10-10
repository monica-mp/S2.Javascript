const objecte1 = {
    propietat1 : "valor1",
    propietat2 : "valor2",
}

const objecte2 = {...objecte1};

objecte2.propietat2 = "nou valor";

console.log(objecte1);
console.log(objecte2);