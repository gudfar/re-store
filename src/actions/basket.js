import * as actionTypes from '../constants/actionTypes';

const addToBasket = (item, dispatch) => {
    dispatch({type: actionTypes.ADD_TO_BASKET, payload: item});
    dispatch(basketLoaded());
};

const basketLoaded = () => ({type: actionTypes.BASKET_LOADED});

export {
    addToBasket,
    basketLoaded,
};
