import React, {Component} from 'react';

export default class BeerConsumed extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return <p>I tried a new beer: {this.props.beer}</p>
    
        }
}