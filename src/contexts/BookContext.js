import React, {createContext, useState, useEffect } from 'react'
import uuidv4 from 'uuidv4';


const storedBooks = localStorage.getItem('books');
const storedBooksParsed = (storedBooks) ? JSON.parse(storedBooks) : [];

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, setBooks] = useState(storedBooksParsed)
    
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    const addBook = (title, author, about) => {

        const newBook = {
            title,
            author,
            about,
            id: uuidv4()
        }

        setBooks([...books, newBook])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
    }

export default BookContextProvider;