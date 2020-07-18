
const initialBooks = [
    {
        id: 1,
        title: 'Life Is What You Make It',
        author: 'PPreethy Sheoye',
        price: '100',
        edition: 'Bloomsbury, India; 2 edition (2014)',
        image: '1.jpeg',
        isActive: true
    },
    {
        id: 2,
        title: 'You Can Win',
        author: 'Khera Shiv',
        price: '100',
        edition: '3',
        image: '2.jpg',
        isActive: true
    },
    {
        id: 3,
        title: 'Indian Art and Culture',
        author: 'NITIN SINGHANIA',
        price: '100',
        edition: '3 rd Edition',
        image: '3.jpg',
        isActive: true
    },
    {
        id: 4,
        title: 'Student Atlas For India',
        author: 'Robina',
        price: '100',
        edition: '3',
        image: '4.jpg',
        isActive: true
    },
    {
        id: 5,
        title: 'Word Power Made Easy',
        author: 'NORMAN LEWIS',
        price: '100',
        edition: '23',
        image: '5.jpg',
        isActive: true
    },
    {
        id: 6,
        title: 'Indian Economy',
        author: 'VIVEK SING',
        price: '100',
        edition: '4TH',
        image: '6.jpg',
        isActive: true
    },
    {
        id: 7,
        title: 'Indian Economy',
        author: 'VIVEK SING',
        price: '100',
        edition: '4TH',
        image: '6.jpg',
        isActive: false
    }

]

export default (state = initialBooks, action) => {

    const { type } = action;

    switch (type) {

        case 'ADD_BOOK':
            return [
                ...state,
                action.book
            ];

        case 'REMOVE_BOOK':
            return state.map(book => {
                if (book.id === action.id) {
                    return {
                        ...book,
                        isActive: false
                    };
                } else {
                    return book;
                };
            })
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_BOOK':
            return state.map((book) => {
                if (book.id === action.id) {
                    return {
                        ...book,
                        ...action.updates
                    };
                } else {
                    return book;
                };
            });

        default:
            return state;
    }
}