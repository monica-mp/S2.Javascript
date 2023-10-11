function processarCadena(string, callback){
    let majus = string.toUpperCase();
    callback(majus);
}

mostrar = (cadena) => console.log(cadena);

processarCadena("Prova string", mostrar);