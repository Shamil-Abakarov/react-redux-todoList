import { ADD_TODO, REMOVE_TODO, COMPLETED_TODO } from '../components/todoConstants';

export function addTodo(todo){
	return ({
		type: ADD_TODO,
		todo
	})
}

export function removeTodo(todo){
	return ({
		type: ADD_TODO,
		todo
	})
}

export function completedTodo(todo){
	return ({
		type: COMPLETED_TODO,
		todo
	})
}
