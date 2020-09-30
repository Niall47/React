import React from 'react';

export default class DeepState extends React.Component {

    constructor() {
        super();
        // This is different from the counter component is that person is an object not a primative data type
        this.state = {
            person: {name: 'Niall', age: 28}
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
    
    }

    handleButtonClick() {
        // Mutations are shallow
        // React will update the person reference but does not look at the object
        // The new person state now references an object that only contains name, age has been lost
        // Mutations are merged at the top level only, so quote will be unaffected
    
        // this.setState({person: {name: 'Thomas'}});

        // How to mutate the person object's name so that age is unaffected
        // This will work in a class component (but not when using hooks)
        // if we want to guarantee the the comp. will be re-rendered
        // We must mutate the reference and not the object referenced
        // Dont do this
        // this.state.person.name = "Thomas";
        // this.setState({person: this.state.person}); 

        // You could do this
        // but it is unneccesarily verbose
        // this.setState({person: {name: 'Thomas', age: this.state.person.age}})


        // Here we are copying the object, changing a value and passing it to the setState method
        // We should be using the version of setState that accepts a handler function!
        // We are accessing the person object directly, but we can't be sure it is still current
        this.setState({person: {...this.state.person, name: 'Dave'}})

        // The golden rule of state
        // Treat your state as if it immutable
        // We alwasy should be using spread to copy the array and change the state with the new copy
    }

    render() {
        const {name, age} = this.state.person;
        return (
            <div>
                <p>
                    My name is {name} and I am {age} years old
                </p>
                <button onClick={this.handleButtonClick} className="btn btn-primary">Change the person's name</button>
            </div>
        )
    }
}