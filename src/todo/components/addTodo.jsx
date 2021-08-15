import { useState } from "react";
import { connect } from "react-redux";
import { helperFunctionAddTask } from "../reducers/todo";

let AddToDo = ({dispatch}) => {

    const [input, setInput] = useState('')
    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(helperFunctionAddTask(input))

        // dispatch action here.
        setInput('')
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input type="text" value = {input} onChange = {(e) => setInput(e.target.value)}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

AddToDo = connect()(AddToDo)

export default AddToDo