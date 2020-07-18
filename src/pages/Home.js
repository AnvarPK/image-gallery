import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getBooks } from '../redux/selectors/Books'
import BooksList from '../components/Books/BooksList'
import { setIsActive } from '../redux/actions/BookFilter'

const Home = ({ books, isActive, dispatch }) => {

    useEffect(() => {

        return () => {
            dispatch(setIsActive(true));
        }
    }, [])


    const isActiceClick = function (v) {
        if (isActive != v) dispatch(setIsActive(v))
    }

    return (
        <>
            <div className="active-inactive-switch">
                <div className="btn-group">
                    <button className="btn btn--green" onClick={isActiceClick.bind(this, true)}>Active</button>
                    <button className="btn btn--red-soft" onClick={isActiceClick.bind(this, false)}>Inactive</button>
                </div>
            </div>
            <BooksList books={books} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        books: getBooks(state.books, state.bookFilter.isActive),
        isActive: state.bookFilter.isActive
    }
}

export default connect(mapStateToProps)(Home)
