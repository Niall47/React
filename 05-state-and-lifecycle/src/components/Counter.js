import React from 'react';


// if you want a stateful component (ignoring hooks) it must be a class component
// a stateful component is one that has state, changes to which trigger a rerender
// Normal JS state does not trigger a rerender

// Props  VS State
// Props are input by the parent and cannot be changed from within
// State is data that is internal (encapsulated) to the component
// Changes to state should trigger a re-render

export default class Counter extends React.Component {

    constructor() {
        super();

        // This attribute is state, but changes to it wont' trigger a re-render
        // this.counter = 0;

        // The attributes added to this.state will trigger a re-render
        // Label does not need to be component state as it does not change
        this.state = {
            label: 'Counter',
            counter: 0
        };

        // for handleButtonClick bind 'this' to the current counter object
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(){
        // In an event handler 'this' is bound to the element to which the handler is assigned
        // In this case that means 'this' is bound to the button
        // this.state.counter += 1;
        // console.log(this.counter)


        // To mutuate the state to trigger a re-render we must call setState and pass
        // a new version of the state. 
        // There are two important rules
        // 1. Mutations are MERGED; you can mutate one or more of many branches only
        // 2. Mutations are SHALLOW; only the reference to an object is mutated, not the object itself
        // NB: setState is ASYNCHRONOUS     

        this.setState({counter: this.state.counter + 1});
    }
    render() {
        return(
            <div>
                <p>{this.state.label}: {this.state.counter}</p>
                <button onClick={this.handleButtonClick} className="btn btn-primary">Increment Counter</button>
            </div>
        );
    }
}