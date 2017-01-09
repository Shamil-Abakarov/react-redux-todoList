import { TODO_FIND_TEXT } from '../constants/todoFindConstants';

export function todoFindReducer(state = '', action){
	if(action.type === TODO_FIND_TEXT){
		let  newState = action.text;
		return newState;
	} else{
		return state;
	}
}