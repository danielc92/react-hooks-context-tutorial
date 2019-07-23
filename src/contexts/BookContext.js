import React, {createContext, useState, useEffect } from 'react'
import uuidv4 from 'uuidv4';




export const BookContext = createContext();

const BookContextProvider = (props) => {

    const getInitialState = () => {
        const storedBooks = localStorage.getItem('books');
        return storedBooks ? JSON.parse(storedBooks) : [];
    }

    const [books, setBooks] = useState(getInitialState())
    
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    const addBook = (title, author, about) => {

        const newBook = {
            title,
            author,
            about,
            id: uuidv4(),
            read: false
        }

        setBooks([...books, newBook])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    const toggleRead = (id) => {
        setBooks(books.map(book => {
            if (book.id === id) {
                let readStatus = book.read
                return {...book, read: !readStatus}
            } else {
                return book
            }
        }))
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook, toggleRead }}>
            {props.children}
        </BookContext.Provider>
    )
    }

export default BookContextProvider;