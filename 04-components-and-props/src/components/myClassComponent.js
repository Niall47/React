import React, {Component} from 'react';

// class components must inherit from React.Component
// if you just import React you need to extend React.Component
// You must have a render method
// It must return JSX

// Before hooks only class components can have state
export default class MyClassComponent extends Component {
    constructor(props) {
        // call the super class constructor before anything else
        super(props);
        console.log(props);
    }
    render() {
    return <p>This is my class component and I got the following props: {this.props.words}</p>

    }
}