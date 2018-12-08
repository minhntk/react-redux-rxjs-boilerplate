import React from 'react';
import TodoListView from './TodoListView';
import { connect } from 'react-redux'
import ModalComponent from '../Modal/ModalComponent';
import { displayTodoForm } from '../../actions/todoActions';

class TodoListContainer extends React.Component {

	constructor(props) {
		super(props);
		this.handleOnDrop = this.handleOnDrop.bind(this);
		this.openTodoForm = this.openTodoForm.bind(this);
	}

	handleOnDrop(e) {
		console.log(e);
	}

	openTodoForm() {
		console.log('dispatch');
		this.props.dispatch(displayTodoForm(true));
	}

	render() {
		const { itemTypes } = this.props;
		return(
			<React.Fragment>
				<ModalComponent />
				<TodoListView
					types={itemTypes}
					openTodoForm={this.openTodoForm}
					handleOnDrop={this.handleOnDrop}
				/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = store => ({
	todoListState: store.todoListState,
	itemTypes: store.todoListState.types
});

export default connect(mapStateToProps)(TodoListContainer);