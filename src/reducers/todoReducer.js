import { ADD_TODO, REMOVE_TODO, COMPLETED_TODO } from '../components/todoConstants';

export function todoReducer(state = [], action){
	switch(action.type){
		case ADD_TODO:
			return [
				...state,
				action.todo
			];

		case REMOVE_TODO:
			let newState = state.filter((item) => {
				if(item.id === action.id){
					return item;
				}
				return false;
			})

			return newState.map((item, index){
				return item.id = index;
			})

		case COMPLETED_TODO: 
			return state.map((item) => {
				if(item.id === action.id){
					item.completed = true;
				}
				return false;
			})

		default:
			return state;
			
	}
}