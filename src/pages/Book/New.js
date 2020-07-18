import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import BookForm from '../../components/Books/BookForm'
import { addBook } from '../../redux/actions/Books';
import { addDescription } from '../../redux/actions/Descriptions';

const BookNew = ({ dispatch, history }) => {
    return (
        <div className="book-form">
            <h1 className="text-center">Create or Edit Book</h1>
            <BookForm
                onSubmit={(book, description) => {
                    const id = uuidv4();
                    dispatch(addBook(id, book));
                    dispatch(addDescription({ description, bookId: id }));
                    history.push('/');
                }}
            />
        </div>)
}



export default connect()(BookNew)