import React, {createContext, useState, useEffect } from 'react'
import uuidv4 from 'uuidv4';
import faker from 'faker';
const {name} = faker;
const {lorem} = faker;
const defaultBooks = [
    {
    title: 'Taken by the wind',
    author: `${name.firstName()} ${name.lastName()}`,
    about: lorem.sentences(8),
    id: uuidv4()
    }, {
    title: 'Across the plains',
    author: `${name.firstName()} ${name.lastName()}`,
    about: lorem.sentences(8),
    id: uuidv4()
    }, {
    title: 'Achieve more in 30 days',
    author: `${name.firstName()} ${name.lastName()}`,
    about: lorem.sentences(8),
    id: uuidv4()
    }, {
    title: '200 recipes from around the globe',
    author: `${name.firstName()} ${name.lastName()}`,
    about: lorem.sentences(8),
    id: uuidv4()
    }, {
    title: 'My Brother',
    author: `${name.firstName()} ${name.lastName()}`,
    about: lorem.sentences(8),
    id: uuidv4()
    }, {
    title: 'Dark journey by the moon',
    author: `${name.firstName()} ${name.lastName()}`,
    about: lorem.sentences(8),
    id: uuidv4()
    }
];
console.log(defaultBooks[0].id)

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