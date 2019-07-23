import React, { useState } from 'react'

export default function SongList() {

    const [songs, setSongs] = useState([
        {title: 'almost home', id: 1},
        {title: 'memory gospel', id: 2},
        {title:'this wild darkness', id: 3}
    ])

    const addSong = () => {
        let newSong = { title: 'new song', id: 4 }
        setSongs([...songs, newSong])
    }

    return (
        <div className="SongList">
            <ul className="collection">
                {
                    songs.map(song => 
                    <li className="collection-item" key={song.id}>{ song.title }</li>)
                }
            </ul>
            <button className="btn" onClick={addSong}>Add a new song</button>
        </div>
    )
}
