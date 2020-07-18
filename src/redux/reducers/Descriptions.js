import { v4 as uuidv4 } from 'uuid';

const initialDescriptions = [
    {
        id: 1,
        bookId: 1,
        description: "A book of love, hope, and how determination can overcome even your destiny - Life is What You Make of It by Preeti Shenoy was in the 'Top books of 2011\" as per the Nielsen list which is published in Hindustan Times.It was also on the Times of India all- time best sellers of 2011."
    },
    {
        id: 2,
        bookId: 2,
        description: "description 2"
    }
]

export default (state = initialDescriptions, action) => {
    const { type } = action;

    switch (type) {

        case 'ADD_DESCRIPTION':
            return [
                ...state,
                action.description
            ]
        case 'EDIT_DESCRIPTION':
            const getDes = [...state].filter(st => st.bookId === action.bookId)

            if (getDes.length === 0) return [
                ...state, { id: uuidv4(), bookId: action.bookId, description: action.updates.description }
            ]
            return state.map((des) => {
                if (des.bookId === action.bookId) {
                    return {
                        ...des,
                        ...action.updates
                    };
                } else {
                    return des;
                };
            });

        default:
            return state;
    }
}