import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';


export default function BookDetail(props) {

    const { removeBook, toggleRead } = useContext(BookContext);
    const { title, author, about, id, read } = props.book
    return (
        <React.Fragment>
            <li className="collection-item" style={{padding: '1.2rem 3rem'}}>
                <p style={{fontSize:'1.5rem', marginBottom: '.8rem'}}>
                    {title}
                </p>
                <p style={{color: 'coral',fontSize: '1.2rem', marginBottom: '.8rem'}}>
                By: {author}
                </p>
                <p className="orange-indigo" style={{marginBottom: '0.8rem'}}>
                    {about}
                </p>

                <p class="secondary-content">{ read ? 
                <span className="chip green white-text">
                    <i className="close material-icons lighten-2">check_circle</i>finished reading</span>
                     : 
                     <span className="chip grey lighten-4"><i class="close material-icons">check_circle</i>not read</span> }</p>
                <button onClick={(e)=> removeBook(id)} style={{marginRight: '.5rem'}} className="btn-small red waves-effect waves-light"><i className="material-icons left">delete</i>Delete</button>       
                <button onClick={(e)=> toggleRead(id)} className="btn-small indigo waves-effect waves-light"><i className="material-icons left">book</i>{ read? 'Mark as not read' : 'Mark as read'}</button> 
            </li>
        </React.Fragment>
    )
}
