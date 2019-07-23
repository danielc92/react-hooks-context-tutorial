import React from 'react';
import BookContextProvider from '../contexts/BookContext';
import Navbar from './Navbar';

export default function App() {
    return (
        <div className="container">
            <BookContextProvider>
                <Navbar/>
            </BookContextProvider>            
        </div>
    )
}
