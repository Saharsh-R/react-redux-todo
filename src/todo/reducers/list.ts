import todoReducer, { TodoAction, ToDoState } from "./todo";



const listTodosReducer = (state: ToDoState[] = [], action : TodoAction) => {
	switch (action.type) {
		case "ADD_TODO":
			return [...state, todoReducer( {id: 244, text: 'TS error', completed: false} , action)];
		case "TOGGLE_TODO":
			return state.map((t) => todoReducer(t, action));
		default:
			return state;
	}
};






export default listTodosReducer