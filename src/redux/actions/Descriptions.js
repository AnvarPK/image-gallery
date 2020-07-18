import { v4 as uuidv4 } from 'uuid';

// ADD_DESCRIPTION
export const addDescription = (
    {
        bookId = '',
        description = '',
    } = {}
) => ({
    type: 'ADD_DESCRIPTION',
    description: {
        id: uuidv4(),
        bookId,
        description
    }
});

// REMOVE_DESCRIPTION
export const removeDescription = ({ bookId } = {}) => ({
    type: 'REMOVE_DESCRIPTION',
    bookId
});

// EDIT_DESCRIPTION
export const editDescription = (bookId, updates) => ({
    type: 'EDIT_DESCRIPTION',
    bookId,
    updates
});