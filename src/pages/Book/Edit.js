import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getBookById } from '../../redux/selectors/Books'
import { getDescriptionById } from '../../redux/selectors/Descriptions'
import BookForm from '../../components/Books/BookForm'
import { editBook } from '../../redux/actions/Books';
import { editDescription } from '../../redux/actions/Descriptions'

const EditBook = ({ book, description, dispatch, history }) => {

    const { id } = book;
    book = { ...book, description }

    return (
        <div className="book-form">
            <h1 className="text-center">Create or Edit Book</h1>
            <BookForm
                book={book}
                onSubmit={(book, description) => {
                    dispatch(editBook(id, book));
                    dispatch(editDescription(id, { description }));
                    history.push('/');
                }}
            />
        </div>)
}


const mapStateToProps = (state, props) => {
    return {
        book: getBookById(state.books, props.match.params.id),
        description: getDescriptionById(state.descriptions, props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditBook)

