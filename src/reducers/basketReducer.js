import * as actionTypes from '../constants/actionTypes';

const initialState = {
    items: [
        // {
        //     id: 1,
        //     name: 'Book #1',
        //     count: 3,
        //     price: 150
        // },
    ],
    total: 0,
};

/**
 * @param state
 * @param action
 */
const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            return addToBasket(state, action);
        case actionTypes.BASKET_LOADED:
            return state;
        // case actionTypes.BOOKS_FAILED:
        //     return {
        //         books: [],
        //         loading: false,
        //         error: action.payload
        //     };
        default:
            return state;
    }
};


const addToBasket = (state, {payload: item}) => {
    const { items } = state;
    const newItem = {
        id: item.id,
        title: item.title,
        count: 0,
        price: item.price
    };
    return {
        ...state,
        items: [
            ...items,
            newItem
        ]
    };
};

export default basketReducer;