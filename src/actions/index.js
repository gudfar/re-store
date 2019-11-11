import * as actionTypes from '../constants/actionTypes';

const booksLoaded = (bookList) => ({
    type: actionTypes.BOOKS_LOADED,
    payload: bookList
});

export {
    booksLoaded
};
