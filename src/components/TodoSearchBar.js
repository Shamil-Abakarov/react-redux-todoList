import React, { Component } from 'react';
import { connect } from 'react-redux';

import { findText } from '../actions/todoFindActions';
import { filterCategory } from '../actions/todoFilterActions';

import './TodoSearchBar.css';

class TodoSearchBar extends Component {

	handleFindChange = (e) => {
		this.props.findText(e.target.value);
	}

	handleFilterClick = (elem, e) => {
		e.preventDefault();
		let item = elem.target;
		let filter = item.getAttribute('filter');
		this.props.filterCategory(filter);
	}

	render(){

		let { todoList } = this.props;

		if(todoList.length){
			return(
				<div className="search-bar__wrapper">
					<input className="search-bar__input" onChange={this.handleFindChange.bind(this)} type="text" placeholder="Write text..." />
					<div className="search-bar__list-wrapper">
						<ul className="search-bar__list">
							<li className="search-bar__list-item">
								<a href="#" onClick={this.handleFilterClick.bind(this)}>All</a>
							</li>
							<li className="search-bar__list-item">
								<a href="#" onClick={this.handleFilterClick.bind(this)} filter="completed">Completed</a>
							</li>
							<li className="search-bar__list-item">
								<a href="#" onClick={this.handleFilterClick.bind(this)} filter="uncompleted">Uncompleted</a>
							</li>
						</ul>
					</div>
				</div>
			);
		} else{
			return(
				false
			);
		}
		
	}
}

export default connect(
	store => ({
		todoList: store.todoReducer,
	}),
	dispatch =>({
		findText(text){
			dispatch(findText(text));
		},
		filterCategory(text){
			dispatch(filterCategory(text));
		}
	})
)(TodoSearchBar);