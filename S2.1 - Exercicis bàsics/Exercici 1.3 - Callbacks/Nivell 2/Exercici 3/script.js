function esperarISaludar(nom, callback){
    setTimeout(() => {
        callback(nom);
    }, 2000);
}

const saludar = (nom) => console.log(`Hola ${nom}`);

let nom = "monica";
esperarISaludar(nom, saludar);