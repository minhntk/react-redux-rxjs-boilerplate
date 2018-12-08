import React from 'react';
import TodoItemContainer from '../Todo/TodoItemContainer';
import '../../styles/css/todo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const TodoListView = (props) => {
	const { types } = props;
	const itemLists = types.map((item)=> (
		<div className="todo-list-container" onDrop={props.handleOnDrop}>
		</div>
	));
	return (
		<div className="container">
			{
				types.map(item => (
					<div key={item} className="todo-list-container" onDrop={props.handleOnDrop}>
						<div className="title">
							{item}
						</div>
						<TodoItemContainer />
					</div>
				))
			}
			<div>
				<button onClick={props.openTodoForm}>
					<FontAwesomeIcon icon={faPlusCircle} /> Add Todo Item
				</button>
			</div>
		</div>
	);
};

export default TodoListView;