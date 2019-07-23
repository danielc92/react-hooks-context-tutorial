import React, { Component } from 'react'
import Navbar from './Navbar';
import BookList from './BookList';
import ThemeContextProvider from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <ThemeContextProvider>

                    <Navbar/>
                    <BookList/>
                    <ThemeToggle/>
                </ThemeContextProvider>
            </div>
        )
    }
}
