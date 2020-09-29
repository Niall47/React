// Class: a template or blueprint for creating objects
// JS is NOT an OOP
// JS is a prototypal language
// ES6 classes are syntactic sugar for contructor functions


// Object literal
p1 = {name: 'Niall', age:109};

// contructor function: a template for creating objects
function Person(name, age) {
    // When this function is called with the 'new' keyword
    // 'this' refers to the object under construction
    this.name = name;
    this.age = age;
}
p2 = new Person('Niall', 108)


// class: syntactic sugar for a constructor function

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('Hello my name is ' + this.name)

    }
}
p3 = new Person('Word', 100)
p3.sayHello();

// Both the class and function work exactly the same. 
// We use classes to extend the functionality by adding functions