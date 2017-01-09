import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeTodo, completedTodo } from '../actions/todoActions';
import './TodoList.css';

class TodoList extends Component {

	handleRemoveClick = (item) => {
		this.props.removeTodo(item);
	}

	handleCompletedClick = (item) => {
		this.props.completedTodo(item);
	}

	render(){

		let todoItem;

		let { todoList } = this.props,
			{ findText } = this.props,
			{ filterCategory } = this.props,
			storage = JSON.stringify(this.props.todoList);
			
		localStorage.setItem('todoItems', storage);

		if(filterCategory){
			
			if(filterCategory === 'completed'){
				todoList = todoList.filter((item) => {
								if(item.completed === true){
									return item;
								}
								return false;
							});
			} else{
				todoList = todoList.filter((item) => {
								if(item.completed === false){
									return item;
								} 
								return false;
							});
			}
			
		}

		todoList = todoList.filter((item) => {
			if(item.text.toLowerCase().startsWith(findText.toLowerCase(), 0 && findText.trim() !== '')){
				item.findText = item.text.substring(0, findText.length);
				return item;
			} else{
				item.findText = '';
				return false;
			}
		});

		todoItem = todoList.map((item, index) => {
			return (
				<li className={`todo-list__item ${item.completed ? 'completed' : ''}`} key={item.id}>
					<span className="todo-list__item-number">{index + 1})</span>
					<span className="todo-list__item-completed-text">{item.completed  ? 'completed' : ''}</span>
					<span className="todo-list__item-completed fa fa-check" onClick={this.handleCompletedClick.bind(null, item)}></span> 
					<span className="todo-list__item-text"><b>{item.findText}</b>{item.text.substring(findText.length)}</span> 
					<span className="todo-list__item-delete fa fa-times" onClick={this.handleRemoveClick.bind(null, item)}></span>
				</li>
			);
		})
		
		if(todoItem.length ){
			return(
				<div className="todo-list__wrapper">
					<ul className="todo-list">
						{todoItem}
					</ul>
				</div>
			);
		} else{
			return(
				<p className="todo-list__empty">TodoList empty...</p>
			);
		}
		

	}
}

export default connect(
	store => ({
		todoList: store.todoReducer,
		findText: store.todoFindReducer,
		filterCategory: store.todoFilterReducer
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