import React from 'react';
import SongList from './SongList';
import ThemeContextProvider from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function App() {
    return (
        <div className="container">
            <ThemeContextProvider>
                <SongList/>
                <ThemeToggle/>
            </ThemeContextProvider>
        </div>
    )
}
