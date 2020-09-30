import React from 'react';

export default class NewBeerForm extends React.Component {

    constructor() {
        super();
        this.state = {beers: []};
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick() {
        this.setState((previousState, currentProps) => ({beers: previousState.beers.push('dgdfgdfg')}));
    }

    render() {
        const {beers} = this.state
        return(
            <form className='mb-3'>
                <div className='form-group'>
                    <label>New Beer</label>
                    <input type="text" className="form-control"/>
                </div>
                <button onClick={this.handleButtonClick} className="btn btn-primary">Add</button>
            </form>
        );
    }
}