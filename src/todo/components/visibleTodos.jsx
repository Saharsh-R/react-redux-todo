import { connect } from "react-redux";
import { helperFunctionToggleToDo } from "../reducers/todo";

const Todo = ({ onClick, completed, text }) => (
	<li
		onClick={onClick}
		style={{
			textDecoration: completed ? "line-through" : "none",
		}}
	>
		{text}
	</li>
);

const TodoList = ({ todos, onTodoClick }) => (
	<ul>
		{todos.map((todo) => (
			<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
		))}
	</ul>
);

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return todos;
		case "SHOW_COMPLETED":
			return todos.filter((t) => t.completed);
		case "SHOW_ACTIVE":
			return todos.filter((t) => !t.completed);
		default:
			//will never reach here
			console.log("Should not have reached here.");
	}
};



const mapStateToTodoListProps = (state) => ({
	todos: getVisibleTodos(state.todos, state.show),
});
const mapDispatchToTodoListProps = (dispatch) => ({
	onTodoClick: (id) => {
		dispatch(helperFunctionToggleToDo(id));
	},
});
let VisibleTodos = connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList);
export default VisibleTodos;
