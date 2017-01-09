import { FILTER_CATEGORY } from '../constants/todoFilterConstants';

export function todoFilterReducer(state = '', action){
	if(action.type === FILTER_CATEGORY){
		let newState = action.filter;
		return newState;
	}
	return state;
}