import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoForm extends Component {
	render(){
		return(
			<div>
				<form>
					<textarea />
					<button type="submit">ADD TODO</button>
				</form>
			</div>
		);
	}
}

export default connect(
	store => ({}),
	dispatch =>({})
)(TodoForm);