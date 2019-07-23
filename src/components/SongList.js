import React, { useState , useEffect, useContext} from 'react';
import NewSongForm from './NewSongForm';
import uuidv4 from 'uuidv4';
import { ThemeContext } from '../contexts/ThemeContext';

export default function SongList() {
    
    const { isLightTheme, light, dark } = useContext(ThemeContext);

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
                <h5>{ isLightTheme ? 'Light theme': 'Dark theme'}</h5>
                <ul className="collection">
                    {
                        songs.map(song => 
                        <li className="collection-item indigo-text" key={song.id}>{ song.title }</li>)
                    }
                </ul>
                </div>
            </div>
            <NewSongForm addSong={addSong}/>

        </React.Fragment>
    )
}
