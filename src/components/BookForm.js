import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';


const BookForm = () => {
    
    const { addBook } = useContext(BookContext)
    
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [country, setCountry] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, author,country)
        if (title.length > 0 && author.length > 0 && country.length > 0) {
            addBook(title, author, country)
        }
    }
    
    return (
        <div className="card">
            <div className="card-content">
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label >Title</label>
                        <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text"/>
                    </div>
                    <div className="input-field">
                        <label >Author</label>
                        <input value={author} onChange={(e)=> setAuthor(e.target.value)} type="text"/>
                    </div>
                    <div className="input-field">
                        <label >Country</label>
                        <input value={country} onChange={(e)=> setCountry(e.target.value)} type="text"/>
                    </div>
                    <button className="btn" type="submit">Add this book</button>
                </form>
            </div>
        </div>
    )
}

export default BookForm;
