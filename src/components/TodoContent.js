import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoContent extends Component {
	render(){
		return(
			<div>
				<TodoForm />
				<TodoList />
			</div>
		);
	}
}

export default TodoContent;