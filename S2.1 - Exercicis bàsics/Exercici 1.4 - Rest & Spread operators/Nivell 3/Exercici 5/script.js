function arguments(arg1, arg2, arg3){
    console.log("Argument 1: " + arg1);
    console.log("Argument 2: " + arg2);
    console.log("Argument 3: " + arg3);
}
const array = [1, 2, 3];

arguments(...array);