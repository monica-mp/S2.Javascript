function promesa(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Hola, món');
        }, 2000); 
    });
}


promesa().then((resolve) => {
  console.log(resolve);
});