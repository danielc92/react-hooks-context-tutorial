import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetail from './BookDetail'

const BookList = () => {

    const { books } = useContext(BookContext);
    
    return (
        <div className="card">
            <div className="card-content">
            <h5>Book List</h5>
                <ul className="collection">
                { books.map(b => (<BookDetail key={b.id} book={b}/>))}
                </ul>
            </div>
        </div>
    )
}

export default BookList;