import { combineReducers } from 'redux';

import { IState } from '../interfaces';
import { modelReducers } from './modelReducer';
import { loadingReducers } from './loadingReducers';

export const rootReducer = combineReducers<IState>({
    models: modelReducers,
    loading: loadingReducers,
});
