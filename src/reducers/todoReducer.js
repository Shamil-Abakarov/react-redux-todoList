import { ADD_TODO, REMOVE_TODO, COMPLETED_TODO } from '../constants/todoConstants';

let initialState = JSON.parse(localStorage.getItem("todoItems"));

export function todoReducer(state = initialState, action){
	switch(action.type){
		case ADD_TODO:
			return [
				...state,
				action.todo
			];

		case REMOVE_TODO:
			let newState = state.filter((item) => {
				if(item.id !== action.todo.id){
					return item;
				}
				return false;
			})

			return newState.map((item, index) => {
				item.id = index;
				return item;
			})

		case COMPLETED_TODO: 
		console.log(action);
			return state.map((item) => {
				if(item.id === action.todo.id){
					item.completed = !item.completed;
				}
				return item;
			})

		default:
			return state;

	}
}