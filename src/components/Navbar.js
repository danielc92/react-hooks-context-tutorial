import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext) 
    return (
        <div className="card">
            <div className="card-content">
                <h5>Daniels reading list</h5>
                <p>You have <span className="chip">{ books.length } books</span> to read...</p>
            </div>
        </div>
    );
}

export default Navbar;

