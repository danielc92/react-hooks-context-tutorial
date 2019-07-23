import React, { useState , useEffect} from 'react';
import NewSongForm from './NewSongForm';
import uuidv4 from 'uuidv4';


export default function SongList() {

    const [songs, setSongs] = useState([
        {title: 'almost home', id: 1},
        {title: 'memory gospel', id: 2},
        {title:'this wild darkness', id: 3}
    ])

    const addSong = (title) => {
        let newSong = { title, id: uuidv4() }
        setSongs([...songs, newSong])
    }

    useEffect(()=>{
        console.log('use effect')
    })

    return (
        <React.Fragment>
            
            <div className="card">
                <div className="card-content">
                <ul className="collection">
                    {
                        songs.map(song => 
                        <li className="collection-item" key={song.id}>{ song.title }</li>)
                    }
                </ul>
                </div>
            </div>
            <NewSongForm addSong={addSong}/>

        </React.Fragment>
    )
}
