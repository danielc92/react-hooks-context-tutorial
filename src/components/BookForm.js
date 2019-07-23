import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';


const BookForm = () => {
    
    const { addBook } = useContext(BookContext)
    
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [about, setAbout] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (title.length > 0 && author.length > 0 && about.length > 0) {
            addBook(title, author, about)
        }
    }
    
    return (
        <div className="card">
            <div className="card-content">
                <h5>Add a book here</h5>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                    <i class="material-icons prefix">short_text</i>
                        <label >Title</label>
                        <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text"/>
                    </div>
                    
                    <div className="input-field">
                    <i class="material-icons prefix">subject</i>
                        <label >About</label>
                        <input value={about} onChange={(e)=> setAbout(e.target.value)} type="text"/>
                    </div>
                    <div className="input-field">
                    <i class="material-icons prefix">account_circle</i>
                        <label >Author</label>
                        <input value={author} onChange={(e)=> setAuthor(e.target.value)} type="text"/>
                    </div>
                    <button className="btn orange waves-effect waves-light" type="submit"><i class="material-icons left">library_add</i>Add</button>
                </form>
            </div>
        </div>
    )
}

export default BookForm;
