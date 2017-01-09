import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoSearchBar from './TodoSearchBar';

class TodoContent extends Component {
	render(){
		return(
			<div>
				<TodoForm />
				<TodoSearchBar />
				<TodoList />
			</div>
		);
	}
}

export default TodoContent;