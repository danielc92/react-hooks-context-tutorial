import React, { createContext, useState } from 'react'

export const SongContext = createContext();

const SongContextProvider = (props) => {
    
    const [songs, setSongs] = useState([
        {title: 'almost home', id: 1},
        {title: 'memory gospel', id: 2},
        {title:'this wild darkness', id: 3}
    ])

//     const addSong = (title) => {
//     let newSong = { title, id: uuidv4() }
//     setSongs([...songs, newSong])
// }
    
    return (
        <SongContext.Provider value={{songs}}>
            {props.children}
        </SongContext.Provider>
    )
}

export default SongContextProvider;