export const getBooks = (books, isActive) => [...books].filter(book => book.isActive === isActive);  // it will filter Books isActive == true

export const getBookById = (books, id) => [...books].filter(book => book.id == id)[0]; //return book by id


