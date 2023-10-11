function promesa(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Hola, món');
        }, 2000); 
    });
}

async function funcioAsincrona(){ 
    try{
        const result = await promesa();
        console.log(result); 
    }catch(error){
        console.error(error);
    }
    
}

funcioAsincrona();