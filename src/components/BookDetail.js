import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';


export default function BookDetail(props) {

    const { removeBook } = useContext(BookContext);
    console.log(removeBook)
    const { title, author, about } = props.book
    return (
        <React.Fragment>
            <li className="collection-item" style={{padding: '1.5rem 2rem', lineHeight: '1.5rem'}}>
                <p style={{fontSize:'1.5rem', marginBottom: '.8rem'}}>
                    {title}
                </p>
                <p style={{color: 'coral',fontSize: '1.2rem', marginBottom: '.8rem'}}>
                By: {author}
                </p>
                <p className="orange-indigo">
                    {about}
                </p>
                {/* <button onClick={removeBook(id)} className="btn-small red">Delete</button>        */}
                
            </li>
        </React.Fragment>
    )
}
