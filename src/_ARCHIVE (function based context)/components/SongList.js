import React, { useContext} from 'react';
import NewSongForm from './NewSongForm';
import { ThemeContext } from '../contexts/ThemeContext';
import { SongContext } from '../contexts/SongContext';

export default function SongList() {

    const { songs } = useContext(SongContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    console.log(light, dark)
    

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
            <NewSongForm/>
        </React.Fragment>
    )
}
