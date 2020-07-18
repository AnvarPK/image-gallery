import React from 'react'
import { connect } from 'react-redux'
import {
    Link
} from 'react-router-dom'
import { removeBook, editBook } from '../../redux/actions/Books'

const Book = ({ book, dispatch }) => {
    const { id, title, author, edition, isActive, image } = book;

    //Delete action
    const deleteBook = (e) => {
        e.preventDefault();
        dispatch(removeBook({ id }));
    }

    //Edit action
    const restoreBook = (e) => {
        e.preventDefault();
        dispatch(editBook(id, { isActive: true }));
    }

    return (
        <li className="col-12 col-md-6 col-lg-4 ">

            <div className="book">
                <Link to={isActive ? `/books/${id}` : ''} >
                    <div className="book__title">
                        <h2>{title}</h2>
                    </div>
                    <div className="book__details">
                        <p className="text text-dark">Author: {author}</p>
                        <p className="text text-gray">Edition: {edition}</p>
                        <img src={`/books/${image}`} className="book__image" alt="" />
                    </div>
                </Link>
                <div className="book__buttons" style={{ display: isActive ? 'block' : 'none' }}>
                    <div className="btn-group">
                        <button className="btn btn--red" onClick={deleteBook}>Delete</button>
                        <Link to={`/books/edit/${id}`} className="btn btn--blue">Edit</Link>
                    </div>
                </div>
                <div className="book__buttons" style={{ display: !isActive ? 'block' : 'none' }}>
                    <div className="btn-group">
                        <button className="btn btn--green" onClick={restoreBook}>Restore</button>
                    </div>
                </div>
            </div>

        </li >)
}

export default connect()(Book)