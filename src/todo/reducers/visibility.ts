type ToDoVisibleStates = "SHOW_ALL" | "SHOW_ACTIVE" | "SHOW_COMPLETED";

interface VisibilityToggleAction {
	type: "SET_VISIBILITY_FILTER";
	payload: {
		filter: ToDoVisibleStates;
	};
}

export default function visibilityFilter(state: ToDoVisibleStates = "SHOW_ALL", action: VisibilityToggleAction) {
	switch (action.type) {
		case "SET_VISIBILITY_FILTER":
			return action.payload.filter;
		default:
			return state;
	}
}

export const setVisibilityFilter = (filter : ToDoVisibleStates) => {
	return {
		type: "SET_VISIBILITY_FILTER",
		payload: {
			filter,
		},
	};
};
