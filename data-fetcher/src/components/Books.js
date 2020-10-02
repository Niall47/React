import React, { useEffect, useState } from 'react';

export default function Books(props) {
    
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/books')
        .then(response => response.json())
        .then(books => setBooks(books))
    }, []);

    
    return (
        <>
            <BookList books={books}/>
        </>
    );
}

const BookList = props => {
    const {books} = props;
    return (
        <ul>
            {books && books.map(book => <li key={book.id}>{book.title}</li>)}
        </ul>
    )
}