import React from 'react';

export default class NewBeerForm extends React.Component {


    constructor() {
        super();
        this.state = {newBeer: ''}
        this.handleNewBeerChange = this.handleNewBeerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleNewBeerChange(event) {
        this.setState({newBeer: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        // We are calling the handler in the parent component
        // it will add the new beer to its array of beers
        // and in doing so trigger a re-render of the BeerList component
        this.props.onNewBeer(this.state.newBeer);
    }

    render() {
        const {newBeer} = this.state;
        return(
            <form onSubmit={this.handleSubmit} className='mb-3'>
                <div className='form-group'>
                    <label>New Beer</label>
                    <input 
                    type="text"
                    value={newBeer}
                    onChange={this.handleNewBeerChange}
                    className="form-control"/>
                </div>
                <button  className="btn btn-primary">Add</button>
            </form>
        );
    }
}