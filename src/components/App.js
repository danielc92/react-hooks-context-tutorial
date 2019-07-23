import React from 'react';
import BookContextProvider from '../contexts/BookContext';
import Navbar from './Navbar';
import BookList from './BookList';


export default function App() {
    return (
        <div className="container">
            <BookContextProvider>
                <Navbar/>
                <BookList/>
            </BookContextProvider>            
        </div>
    )
}
