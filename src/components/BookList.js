import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetail from './BookDetail'

const BookList = () => {

    const { books } = useContext(BookContext);

    return (
        <div className="card">
            <div className="card-content">
                <ul className="collection">
                {
                books.map(b => (
                    <BookDetail book={b}/>
                ))
                }
                </ul>
            </div>
        </div>
    )
}

export default BookList;