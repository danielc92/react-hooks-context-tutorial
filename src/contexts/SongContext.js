import React, { createContext } from 'react'

export const SongContext = createContext();

function SongContext() {
    
    const [songs, setSongs] = useState([
        {title: 'almost home', id: 1},
        {title: 'memory gospel', id: 2},
        {title:'this wild darkness', id: 3}
    ])
    
    return (
        <SongContext.Provider value={{songs}}>
            {props.children}

        </SongContext.Provider>
    )
}

export default SongContext;