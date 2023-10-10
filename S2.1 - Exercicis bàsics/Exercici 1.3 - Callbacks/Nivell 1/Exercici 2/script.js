function calculadora (num1, num2, callback){
    callback(num1, num2);
}

const sumar = (num1, num2) => console.log(num1 + num2);

calculadora(4, 7, sumar);