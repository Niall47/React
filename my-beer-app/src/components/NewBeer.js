import React, {Component} from 'react';

export default class NewBeer extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    handleSubmit(event) {
        alert(this.state.value);
      }

    render() {

        return (
            <div className="container">
              <h1 className="display-4 mt-4 mb-4">Beers and stuff</h1>
              <hr />
              <form onSubmit={this.handleSubmit}>
                <label>
                  Name:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
              <NewBeer beer={'dsfs'}/>
            </div>
        
    // return <p>I tried a new beer: {this.props.beer}</p>
        );
    }
}