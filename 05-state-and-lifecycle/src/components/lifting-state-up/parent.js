import React from 'react'
import Child from './Child'

export default class Parent extends React.Component {
    constructor(){
        super();
    }

    handleFeedMe(){
        console.log('Feed Me')
    }

    handleCleanMe(){
        console.log('Clean Me')
    }

    handlePayMe(){
        console.log('Pay Me')
    }
    render() {
        // We are passing handler functions to the child as props
        // In the child, onFeedMe is a ref to the handleFeedMe function
        return <Child 
        onFeedMe={this.handleFeedMe} 
        onCleanMe={this.handleCleanMe} 
        onPayMe={this.handlePayMe}/>;
    }
}