import { TODO_FIND_TEXT } from '../constants/todoFindConstants';

export function findText(text){
	return({
		type: TODO_FIND_TEXT,
		text
	})
}