import React from 'react'

export default function BookDetail(props) {

    return (
        <React.Fragment>
            <li className="collection-item">
                <p>
                <strong>{props.book.title}</strong><br></br>
                {props.book.author}<br></br>
                </p>
                <p className="chip">{props.book.country}</p>
            </li>
        </React.Fragment>
    )
}
