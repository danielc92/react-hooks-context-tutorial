import React, { Component } from 'react'

export default class BookList extends Component {
    
    static contextType = ThemeContext;
    
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark; 
        return (
            <div className="book-list" style={{
                color: theme.syntax,
                background: theme.bg
            }}>
                <li style={{background: theme.bg}}>The way of kings</li>
                <li style={{background: theme.bg}}>The final empire</li>
                <li style={{background: theme.bg}}>Gone with the wind</li>
            </div>
        )
    }
}
