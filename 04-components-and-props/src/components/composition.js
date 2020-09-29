import React from 'react'

export class Book extends React.Component {
    render () {
        const {title, auther} = this.props;
        return (
            <span>{title} by {auther}</span>
            );
    }
}

// Composition describes a HAS-A relationship
// i.e. a LibraryBook HAS-A Book
export class LibraryBook extends React.Component {
    render () {
        const {title, auther} = this.props;
        return (
            <div>
            {/* Calling the super class render method */}
            <Book title={title} author={author}/>
            <button>Loan</button>
            </div>
        )
    }
}