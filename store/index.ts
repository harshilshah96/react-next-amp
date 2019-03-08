import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

function configureStore() {
    let composeEnhancers = compose;
    let store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(
            ...getMiddlewares(),
        )
    ));
    return store;
}

function getMiddlewares() {
    return [
        thunk,
        promiseMiddleware(),
    ];
}

export const store = configureStore();
