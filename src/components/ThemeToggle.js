import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

export default class ThemeToggle extends Component {
    
    static contextType = ThemeContext;

    render() {
        console.log(this.context, 'themetoggle comp')
        const { toggleTheme } = this.context;
        return (
            <button onClick={toggleTheme}>Toggle the theme</button>
        )
    }
}
