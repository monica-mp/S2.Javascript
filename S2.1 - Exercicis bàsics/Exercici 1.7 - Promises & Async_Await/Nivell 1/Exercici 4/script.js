function promesa(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Hola, món');
        }, 2000); 
    });
}

async function funcioAsincrona(){ 
    const result = await promesa();
    console.log(result); 
}

funcioAsincrona();