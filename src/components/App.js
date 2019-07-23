import React, { Component } from 'react'
import Navbar from './Navbar';
import BookList from './BookList';
import ThemeContextProvider from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import AuthContextProvider from '../contexts/AuthContext';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <ThemeContextProvider>
                    <AuthContextProvider>
                        <Navbar/>
                        <BookList/>
                        <ThemeToggle/>
                    </AuthContextProvider>
                </ThemeContextProvider>
            </div>
        )
    }
}
