import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


export default function ThemeToggle() {

    const { toggleTheme } = useContext(ThemeContext)
    
    return (
        <div className="card">
            <div className="card-content">
                <button className="btn-small orange" onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </div>
    )
}
