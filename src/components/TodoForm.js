import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todoActions';
import './TodoForm.css';

class TodoForm extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		let todo = {
			id: this.props.store.todoReducer.length,
			text: this.refs.textarea.value,
			completed: false
		}

		if(this.refs.textarea.value !== ''){
			this.props.addTodo(todo);
		}

		this.refs.textarea.value = '';

	}

	render(){	
		return(
			<div className="form__wrapper">
				<h1 className="form__title">TodoList</h1>
				<form className="form" onSubmit={this.handleSubmit}>
					<textarea className="form__textarea" ref="textarea" placeholder="Add todo..."/>
					<button className="form__btn" type="submit">ADD TODO</button>
				</form>
			</div>
		);
	}
}

export default connect(
	store => ({
		store: store
	}),
	dispatch =>({
		addTodo(todo){
			dispatch(addTodo(todo));
		}
	})
)(TodoForm);