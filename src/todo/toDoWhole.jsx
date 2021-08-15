import AddToDo from "./components/addTodo"
import Footer from "./components/footer"
import VisibleTodos from "./components/visibleTodos"

const ToDoAppWhole = () => {
    return (
        <div>
            <AddToDo/>
            <VisibleTodos/>
            <Footer/>

        </div>
    )
}

export default ToDoAppWhole