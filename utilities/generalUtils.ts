import { store } from '../store';

export function dispatch(action) {
    store.dispatch(action);
}