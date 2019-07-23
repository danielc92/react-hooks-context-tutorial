import React from 'react';
import SongList from './SongList';
import SongContextProvider from '../contexts/SongContext';
import ThemeContextProvider from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function App() {
    return (
        <div className="container">
            <SongContextProvider>
            <ThemeContextProvider>
                <SongList/>
                <ThemeToggle/>
            </ThemeContextProvider>
            </SongContextProvider>
        </div>
    )
}
