import React, { useState } from 'react'
import { connet } from 'react-redux'
import {
    Link
} from 'react-router-dom'

const BookForm = (props) => {
    const [book, setbook] = useState({
        title: props.book ? props.book.title : '',
        author: props.book ? props.book.author : '',
        price: props.book ? props.book.price : '',
        edition: props.book ? props.book.edition : '',
        description: props.book ? props.book.description : '',
        image: props.book ? props.book.image : '1.jpeg'
    })
    const [error, setError] = useState(null);

    const onTitleChange = (e) => {
        const title = e.target.value;

        if (title) {
            setbook((pre) => ({ ...pre, title }));
        }
    };
    const onAuthorChange = (e) => {
        const author = e.target.value;

        if (author) {
            setbook((pre) => ({ ...pre, author }));
        }
    };
    const onPriceChange = (e) => {
        const price = e.target.value;

        if (price && price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setbook((pre) => ({ ...pre, price }));
        }
    };

    const onEditionChange = (e) => {
        const edition = e.target.value;

        if (edition) {
            setbook((pre) => ({ ...pre, edition }));
        }
    };

    const onImageChange = (e) => {
        const image = e.target.value;

        if (image) {
            setbook((pre) => ({ ...pre, image }));
        }
    };

    const onDescriptionChange = (e) => {
        const description = e.target.value;

        if (description) {
            setbook((pre) => ({ ...pre, description }));
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!book.title || !book.author || !book.price || !book.edition) {
            setError('Please fill all fields')
        } else {
            setError(null)
            props.onSubmit({
                title: book.title,
                author: book.author,
                price: book.price,
                edition: book.edition,
                image: book.image
            }, book.description);
        }
    }



    return (
        <form action=""
            onSubmit={onSubmit}
            className="form"
        >
            <div className="form__field"><label>Title: </label><input type="text" value={book.title}
                onChange={onTitleChange}
            /></div>
            <div className="form__field"><label>Author: </label><input type="text" value={book.author}
                onChange={onAuthorChange}
            /></div>
            <div className="form__field"><label>Price:</label> <input type="text" value={book.price}
                onChange={onPriceChange}
            /></div>
            <div className="form__field"><label>Edition: </label><input type="text" value={book.edition}
                onChange={onEditionChange}
            /></div>
            <div className="form__field"><label> Image:</label> <input type="text" value={book.image}
                onChange={onImageChange}
            /></div>
            <div className="form__field"><label>Descripttion </label><textarea name="" id=""
                value={book.description}
                onChange={onDescriptionChange}
            ></textarea></div>
            {error && <p className='text-center text-red'>{error}</p>}
            <div className="form__button-wrap">
                <div className="btn-group">
                    <Link to="/" className="btn btn--red">Cancel</Link>
                    <button className="btn btn--blue">Save</button>
                </div>
            </div>

        </form>
    )
}


export default BookForm
