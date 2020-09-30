//Every JS object may have state and/or behavior
// state: sn object's data attributes

// this object has a name and age state 
// It also has talk as a behviour
p1 = {
    name: 'Niall',
    age: 47,
    // The 'this' keyword is not bound correctly when using an arrow function
    talk: function(){ 
        console.log(`hello, My name is ${this.name}`)
    }
};

class Person {
    constructor(name, age) {
       this.name = name;
       this.age = age;
    }
    talk() {
        console.log(`hello, My name is ${this.name}`);
    }
}
const p2 = new Person('Niall', 47);
p2.talk();