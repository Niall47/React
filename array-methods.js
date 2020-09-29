// the map method is used alot in react
//  it transforms an array and creates a new array from existing one
// each value in a given array is mapped onto a new value which is added to a new array

const nums = [1,2,3,4,5];

// the .map method accepts a function, the function will be called for each element in the array
// the return value is added to the new array

// function square(num){
//     return num * num
// }
// const squares = nums.map(square);
// console.log(squares)



const squares2 = nums.map(num => num * num);
console.log(squares2)
// the orignal array should be unchanged


// the filter method accepts a function
// it will be called for each value in the array
// the return value (boolean) determines if that value is added to the array
const oddNums = nums.filter(n => n % 2 != 0)
console.log(oddNums)