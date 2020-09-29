// arrow functions are annonymous functions
// they are a means of coding small functions in a more concice way

//  a traditional function to square a number
function tradSquare(num) {
    return num * num
}

// The arrow equivilent of the above looks like this
// Round brackes may be ommited if there is only one param
const arrowSquare = num => num * num

// the => seperates the param list from the function body
// if you omit braces you must omit return keyword
// if you include braces you must include return keyword

console.log(arrowSquare(4));

// no params
const noParams = () => 'Hello';

// two or more params
const twoParams = (n1, n2) => n1 + n2;

console.log(twoParams(3, 3));