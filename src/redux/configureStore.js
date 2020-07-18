import { createStore, applyMiddleware, combineReducers } from 'redux'
import BooksReducer from './reducers/Books'
import DescriptionsReducer from './reducers/Descriptions'
import BookFilterReducer from './reducers/BookFilter'

export default () => {
    const store = createStore(
        combineReducers({
            books: BooksReducer,
            descriptions: DescriptionsReducer,
            bookFilter: BookFilterReducer
        }),
    )
    return store;
}
