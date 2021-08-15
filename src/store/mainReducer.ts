import { combineReducers, createStore } from "redux";
import listTodosReducer from "../todo/reducers/list";
import visibilityFilter from "../todo/reducers/visibility";

let mainReducer = combineReducers({
    todos: listTodosReducer,
    show: visibilityFilter
})


let mainStore = createStore(mainReducer)



export default mainStore;

