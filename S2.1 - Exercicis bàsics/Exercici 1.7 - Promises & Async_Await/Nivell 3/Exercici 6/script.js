const promesa1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve ("Hola");
    }, 2000);
});

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve ("Adeu");
    }, 3000);
});

Promise.all([promesa1, promesa2])
.then((resultats) => {
  console.log(resultats)
})
  .catch((error) => {
    console.error(error);
});