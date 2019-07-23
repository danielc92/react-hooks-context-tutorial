import React, { Component } from 'react'
import Navbar from './Navbar';
import BookList from './BookList';
import ThemeContextProvider from '../contexts/ThemeContext';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <ThemeContextProvider>
                    <Navbar/>
                    <BookList/>
                </ThemeContextProvider>
            </div>
        )
    }
}
