import React, { useState } from 'react'

export default function NewSongForm({ addSong }) {
    
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }

    return (
        <div className="card">
            <div className="card-content">
            <form action="" className="form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="">song name</label>
                    <input value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
                    <button type='submit' className="btn">Add new song</button>
                </div>
            </form>
            </div>
            
        </div>
    )
}
