import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers/index'
import thunk from "redux-thunk";

// const logEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         console.log(action.type);
//         return originalDispatch(action);
//     };
//
//     return store;
// };
//
// const stringEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//
//         if (typeof action === 'string') {
//             return originalDispatch({
//                 type: action
//             });
//         }
//
//         return originalDispatch(action);
//     };
//
//     return store;
// };


const logMiddleware = ({ getState }) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action);
};

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }

    return next(action);
};

const store = createStore(reducer, applyMiddleware(thunk, stringMiddleware, logMiddleware));

store.dispatch('HELLO_WORLD');

export default store;