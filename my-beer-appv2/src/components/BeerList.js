import React from 'react';

export default class BeerList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: props.beers
        }
    }

    render() {
        const {beers} = this.props
        return(
            <div>
                <h3>Beers I drank</h3>
                <ul>
                    {beers && beers.map(beer => <li key={beer}>{beer}</li>)}
                </ul>
            </div>
        );
    }
}