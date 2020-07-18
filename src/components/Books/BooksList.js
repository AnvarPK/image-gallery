import React from 'react'
import Book from './Book'


const BooksList = ({ books }) => {
    return (<ul className="books">
        {
            [...books].map((book, i) => <Book book={book} key={i} />)
        }
    </ul >)
}

export default BooksList 