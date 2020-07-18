

// ADD_BOOK
export const addBook = (
    id,
    {
        title = '',
        author = '',
        price = 0,
        image = '1.jpeg',
        edition = '',
        isActive = true
    } = {}
) => ({
    type: 'ADD_BOOK',
    book: {
        id,
        title,
        author,
        price,
        edition,
        image,
        isActive
    }
});

// REMOVE_BOOK
export const removeBook = ({ id } = {}) => ({
    type: 'REMOVE_BOOK',
    id
});

// EDIT_BOOK
export const editBook = (id, updates) => ({
    type: 'EDIT_BOOK',
    id,
    updates
});