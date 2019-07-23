import React from 'react';
import SongList from './SongList';
import ThemeContextProvider from '../contexts/ThemeContext';

export default function App() {
    return (
        <div className="container">
            <ThemeContextProvider>
                <SongList/>
            </ThemeContextProvider>
        </div>
    )
}
