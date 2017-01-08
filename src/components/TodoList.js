import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeTodo, completedTodo } from '../actions/todoActions';

class TodoList extends Component {

	handleRemoveClick = (e, item) => {
		this.props.removeTodo(item);
	}

	render(){

		let { todoList } = this.props;

		let todoItem = todoList.map((item) => {
			return (
				<li key={item.id}>
					<span>{item.text}</span> <span  onClick={this.handleRemoveClick.bind(null, item)}>X</span>
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