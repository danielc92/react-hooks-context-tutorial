import React, { Component } from 'react'
import Navbar from './Navbar';
import BookList from './BookList';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <BookList/>
            </div>
        )
    }
}
