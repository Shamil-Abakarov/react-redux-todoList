import { combineReducers } from 'redux';

import { todoReducer } from './todoReducer';
import { todoFindReducer } from './todoFindReducer';
import { todoFilterReducer } from './todoFilterReducer';

export const reducers = combineReducers({
	todoReducer,
	todoFindReducer,
	todoFilterReducer
});