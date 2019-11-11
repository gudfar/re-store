import * as actionTypes from '../constants/actionTypes';

const initialState = {
    books: [],
    loading: true
};

/**
 * @param state
 * @param action
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BOOKS_LOADED:
            return {
                books: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;