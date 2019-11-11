import * as actionTypes from '../constants/actionTypes';

const initialState = {
    books: []
};

/**
 * @param state
 * @param action
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BOOKS_LOADED:
            return {books: action.payload};
        default:
            return state;
    }
};

export default reducer;