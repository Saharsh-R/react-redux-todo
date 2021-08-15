export interface TodoAction {
	type: "ADD_TODO" | "TOGGLE_TODO";
	payload: {
		id: number;
		text: string;
	};
}

export interface ToDoState {
	id: number;
	text: string;
	completed: boolean;
}

const todoReducer = (state: ToDoState, action: TodoAction) => {
	switch (action.type) {
		case "ADD_TODO":
			return {
				id: action.payload.id,
				text: action.payload.text,
				completed: false,
			};
		case "TOGGLE_TODO":
			if (state.id !== action.payload.id) {
				return state;
			}
			return {
				...state,
				completed: !state.completed,
			};
		default:
			return state;
	}
};

export const helperFunctionToggleToDo = (id: any) => {
	return {
		type: "TOGGLE_TODO",
		payload: {
			id,
		},
	};
};

let nextId = 0;
export const helperFunctionAddTask = (task: string) => {
	return {
		type: "ADD_TODO",
		payload: {
			id: nextId++,
			text: task,
		},
	};
};

export default todoReducer;
