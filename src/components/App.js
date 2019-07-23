import React from 'react';
import BookContextProvider from '../contexts/BookContext';
import Navbar from './Navbar';
import BookList from './BookList';
import BookForm from './BookForm';


export default function App() {
    return (
        <div className="container">
            <BookContextProvider>
                <Navbar/>
                <BookForm/>
                <BookList/>
            </BookContextProvider>            
        </div>
    )
}
