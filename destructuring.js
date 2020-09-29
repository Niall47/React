// destructuring: Extraction of object props /array elements into variables

// Previously we assigned each individually
person = {name: 'Niall', age: '47'}
const name = person.name;
const age = person.age;

name = ['Niall', 'Thomas', 'James']
const name1 = names[0]
const name2 = names[1]
const name3 = names[2]


// Since ES6 we can use destructuring
// JS will look through the object provided and create variables using the
// same name
person = {name: 'Niall', age: '47'}
const {name, age} = person;

// We can assign them to different names if you want
const {name = n, age = a} = person;

// We can itterate through an array assigning stuff as we go
name = ['Niall', 'Thomas', 'James']
const [n1, n2, n3] = name;

