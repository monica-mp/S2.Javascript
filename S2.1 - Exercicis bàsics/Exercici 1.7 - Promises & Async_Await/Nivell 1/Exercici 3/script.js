function promesa(input){
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            if(input === "Hola"){
                resolve ("Resolt");
            } else{
                reject("Rebutjat");
            }
        }, 2000);
    });
}

promesa("Hola")
.then(result => console.log(result))
.catch(error => console.error(error));
