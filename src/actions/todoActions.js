import { ADD_TODO, REMOVE_TODO, COMPLETED_TODO } from '../constants/todoConstants';

export function addTodo(todo){
	return ({
		type: ADD_TODO,
		todo
	})
}

export function removeTodo(todo){
	return ({
		type: REMOVE_TODO,
		todo
	})
}

export function completedTodo(todo){
	return ({
		type: COMPLETED_TODO,
		todo
	})
}

