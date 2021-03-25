import TodoList from "../todo-list/todo-list";
import './column.css'

export default function Column(props) {

    return (
        <div className="column">
            <h3 className="column__title">{props.title}</h3>
            <TodoList todoArray={props.todos} />
        </div>
    )
}