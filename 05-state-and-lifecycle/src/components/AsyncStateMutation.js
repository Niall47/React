import React from 'react';

export default class AsyncStateMutation extends React.Component {
    constructor() {
        super();
        this.state = {counter: 0};
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(){
        // Each subsequent call to setState does not wait for the previous one to complete
        // If the mutation is dependent on the previous value
        // you should not mutate the state like this
        // this.setState({counter: this.state.counter +1});
        // this.setState({counter: this.state.counter +1});
        // this.setState({counter: this.state.counter +1});

        // The solution is to use the version of setState that accepts a function
        // to return an object from an arrow function it must be wrapped in round brackets
        this.setState((previousState, currentProps) => ({counter: previousState.counter + 1}));
        this.setState((previousState, currentProps) => ({counter: previousState.counter + 1}));
        this.setState((previousState, currentProps) => ({counter: previousState.counter + 1}));
    }

    render() {
        const {counter} = this.state;
        return(
            <div>
                <p>
                    Counter: {counter}
                </p>
                <button onClick={this.handleButtonClick} className="btn btn-primary"> Increment</button>
            </div>
        )
    }
}