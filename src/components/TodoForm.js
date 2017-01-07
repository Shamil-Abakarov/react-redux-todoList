import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todoActions';

class TodoForm extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		let todo = {
			id: this.props.store.todoReducer.length,
			text: this.refs.textarea.value,
			completed: false
		}

		console.log(todo);
		console.log(this.props.store.todoReducer);

		if(this.refs.textarea.value !== ''){
			this.props.addTodo(todo);
		}
	}

	render(){	
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<textarea ref="textarea" />
					<button type="submit">ADD TODO</button>
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