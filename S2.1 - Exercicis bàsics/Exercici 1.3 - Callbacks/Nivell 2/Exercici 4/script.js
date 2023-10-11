function processarElements(array, callback){
    for(let i of array){
        callback(i);
    }
}

const array = [1, 2, 3, 4, 5];

mostrar = (num) => console.log(num);

processarElements(array, mostrar);