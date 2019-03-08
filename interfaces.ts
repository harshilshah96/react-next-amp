import * as Immutable from 'immutable';
import { BaseModel } from './components/reusableComponents/Models/BaseModel';
export interface IState {
    models: Immutable.Map<string, BaseModel<{}>>;
}