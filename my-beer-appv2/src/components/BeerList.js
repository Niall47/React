import React from 'react';

// this is a presentational/stateless/thin component
// It doesn't have state

export default function BeerList(props) {
    const {beers} = props;
    return (
        <div>
            <h3>Beers I drank</h3>
            <ul>
                {beers && beers.map(beer => <li key={beer}>{beer}</li>)}
            </ul>
        </div>
    )
};
