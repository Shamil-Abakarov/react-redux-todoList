import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeTodo, completedTodo } from '../actions/todoActions';

class TodoList extends Component {
	render(){

		let { todoList } = this.props;

		let todoItem = todoList.map((item) => {
			return (
				<li key={item.id}>
					{item.text}
				</li>
			);
		})

		console.log(todoList);

		return(
			<div>
				<ul>
					{todoItem}
				</ul>
			</div>
		);

	}
}

export default connect(
	store => ({
		todoList: store.todoReducer
	}),
	dispatch =>({
		removeTodo(todo){
			dispatch(removeTodo(todo));
		},
		completedTodo(todo){
			dispatch(completedTodo(todo));
		}
	})
)(TodoList);