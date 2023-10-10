const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parOImpar = NUMS => {
    for(let num of NUMS){
        (num % 2 == 0) ? console.log(`${num} és parell`) : console.log(`${num} és imparell`);
    }
}

parOImpar(NUMS);
