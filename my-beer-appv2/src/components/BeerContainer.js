import React from 'react';
import BeerList from './BeerList';
import NewBeerForm from './NewBeerForm';

// This is a container/stateful/fat component
// It has state and doesnt; do any rendering of its own
// rather it delegates the rendering to presentational components
// this is the parent of the presentational components

export default class BeerContainer extends React.Component {

    constructor() {
        super();
        this.state = {beers: []};
        this.handleNewBeer = this.handleNewBeer.bind(this);
    }

    componentDidMount() {
        // Called after first render
        // Its returns a json string from storage so we need to parse throught the string to return it back to an array
        const beersFromStorage = JSON.parse(localStorage.getItem('beers'));
        console.log(beersFromStorage)
        if (beersFromStorage) {
            this.setState({beers: beersFromStorage})
        }
    }

    componentDidUpdate() {
        // everytime a new beer is added the component will be re-renderd and this method will be called
        // this is the safest place to update local storage
        localStorage.setItem('beers', JSON.stringify(this.state.beers))
    }

    // setting state will trigger a re-render of this component
    // That will set new props on the BeerList which will trigger a re-render of that component also
    handleNewBeer(newBeer) {
        this.setState((prevState, props) => ({beers: [...prevState.beers, newBeer]}));
    }

    render() {
        return (
            <div>
                <NewBeerForm onNewBeer={this.handleNewBeer}/>
                <BeerList beers={this.state.beers}/>
            </div>
        )
    }
}