import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeTodo, completedTodo } from '../actions/todoActions';

class TodoList extends Component {

	handleRemoveClick = (item) => {
		this.props.removeTodo(item);
	}

	handleCompletedClick = (item) => {
		this.props.completedTodo(item);
	}

	render(){

		let { todoList } = this.props;

		let todoItem = todoList.map((item) => {
			return (
				<li key={item.id}>
					<span onClick={this.handleCompletedClick.bind(null, item)}>+</span> 
					<span className={`todo-list__item ${item.completed ? 'completed' : ''}`}>{item.text}</span> 
					<span  onClick={this.handleRemoveClick.bind(null, item)}>X</span>
				</li>
			);
		})

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