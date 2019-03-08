import { combineReducers } from 'redux';

import { IState } from '../interfaces';
import { modelReducers } from './modelReducer';

export const rootReducer = combineReducers<IState>({
    models: modelReducers,
});
