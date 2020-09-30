// Values vs references
const num = 42;
let numCopy = num;

numCopy += 1;
console.log(num)
console.log(numCopy)

let obj = {num: 42};
let shallowObjCopy = obj

// Since ES6 we can use the spread operator to create a deep(ish) copy
// You get a copy of the object but if the object contains references to other object they will not be updated

let deepObjcopy = {...obj};
let deepObjcopy = {num: obj.num};

person = {name: 'struate', age: 20}
let deepPersonCopy =  {...person, name: 'sadasf'}
console.log(deepPersoncopy)


// This is how we force react to update the object and re-render
person = {...person, name: 'Dave'};