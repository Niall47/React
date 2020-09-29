import React from 'react'

export class Book extends React.Component {
    render () {
        const {title, auther} = this.props;
        return (
            <span>{title} by {auther}</span>
            );
    }
}


// Inheritance describes an IS-A relationship
// i.e a library book IS-A book
// The library book inherits the state and behaviour of the book
export class LibraryBook extends Book {
    render () {
        return (
            <div>
            {/* Calling the super class render method */}
            {super.render()}
            <button>Loan</button>
            </div>
        )
    }
}