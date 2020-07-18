const Initial = {
    isActive: true,
};

export default (state = Initial, action) => {
    switch (action.type) {
        case 'SET_ISACTIVE':
            return {
                ...state,
                isActive: action.isActive
            }
        default:
            return state;
    }
}

