const array = [11, 12, 13, 14];
const tots = array.every(num => num > 10);

if (tots) {
  console.log("Tots son majors de 10");
} else {
  console.log("No tots son majors que 10");
}

const alguns = array.some(num => num > 10);

if (alguns) {
  console.log("Almenys un és major que 10");
} else {
  console.log("Cap és major que 10");
}