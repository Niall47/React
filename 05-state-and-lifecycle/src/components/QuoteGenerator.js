import React from 'react';

const quotes = [
    "You've got to capture as much of the room sound as possible. That's the very essence of it. - Jimmy Page",
    "Life is a pigsty. - Morrissey",
    "I used to think anyone doing anything weird was weird. Now I know that it is the people that call others weird that are weird. - McCartney",
    "The rock and roll business is pretty absurd, but the world of serious music is much worse. - Zappa",
    "America: It's like Britain, only with buttons. - Ringo"
  ];

export default class QuoteGenerator extends React.Component {


    constructor(){
        super();
        this.state = {
            quote: "Songwriting is a bitch. And then it has puppies - Steve Tyler"
        }
        this.newQuote = this.newQuote.bind(this);
    }

    newQuote() {
        // Ripped from SO, 
        this.setState({quote: quotes[Math.floor(Math.random() * quotes.length)]});

    }

    render() {
        return(
            <div>
                <h1>{this.state.quote}</h1>
                <button onClick={this.newQuote} className="btn btn-primary">Feed Me Quotes</button>
            </div>
        )

        
    }

}