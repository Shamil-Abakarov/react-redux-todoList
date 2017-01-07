import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todoActions';

class TodoForm extends Component {

	render(){
		return(
			<div>
				<form>
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