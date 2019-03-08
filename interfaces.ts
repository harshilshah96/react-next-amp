import * as Immutable from 'immutable';
import { BaseModel } from './components/reusableComponents/Models/BaseModel';
import { IAsyncState } from 'components/reusableComponents/Async';
export interface IState {
    models: Immutable.Map<string, BaseModel<{}>>;
    loading: Immutable.Map<string, IAsyncState>;
}