// Rest Operator
function restOperator(first, ...restOfArgs) {
    console.log(first);
    console.log(restOfArgs);
}

restOperator('one', 'two', 'three', 'four', 'five');

// Spread Operator
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// trim
let str2 = "   I love JavaScript!   ";
console.log(str2.trim());

// max and min
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);

const minNumber = Math.min(10, 5, 20);
console.log(minNumber);

// round
console.log(Math.round(3.6));

// floor
console.log(Math.floor(3.9));

// ceil
console.log(Math.ceil(3.1));

// date
const currentDate = new Date();
console.log(currentDate)

const christmas = new Date(2024, 11, 25)
console.log(christmas)