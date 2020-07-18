import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBookById } from '../../redux/selectors/Books'
import { getDescriptionById } from '../../redux/selectors/Descriptions'
import BooksList from '../../components/Books/BooksList'
import Book from '../../components/Books/Book'

const BookView = ({ book, description }) => {
    const { title, author, price, edition, image } = book;
    return (
        <div className="col">
            <div className="row">
                <div className="col-12 col-sm-3">
                    <div className="img-box">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="col-12 col-sm-9">
                    <div className="book-details">
                        <h1 className="text-blue">{title}</h1>
                        <ul className="book-details__list">
                            <li className="text-large text-gray-dark" ><label>Edition:</label> {edition}</li>
                            <li className="text-large text-dark"><label>Author: </label>{author}</li>
                            <li className="text-large text-dark"><label>Price: </label>{price}</li>
                        </ul>

                    </div>


                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="text-large text-gray-dark" >Description</p>
                    <p className="text-large text-gray-dark">{description}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        book: getBookById(state.books, props.match.params.id),
        description: getDescriptionById(state.descriptions, props.match.params.id)
    }
}

export default connect(mapStateToProps)(BookView)

