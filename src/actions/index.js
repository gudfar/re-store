import * as actionTypes from '../constants/actionTypes';

const booksLoaded = (bookList) => ({
    type: actionTypes.BOOKS_LOADED,
    payload: bookList
});

const booksRequested = () => ({
    type: actionTypes.BOOKS_REQUESTED,
});

const booksFailed = (error) => ({
    type: actionTypes.BOOKS_FAILED,
    payload: error
});

export {
    booksLoaded,
    booksRequested,
    booksFailed,
};
