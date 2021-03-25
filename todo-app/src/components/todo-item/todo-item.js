import { useContext } from "react"
import { TodoContext } from "../../context/todo-context"
import { Link } from 'react-router-dom'
import TodoForm from "../todo-form/todo-form"
import './todo-item.css'

function TodoItem(props) {
    const actions = useContext(TodoContext)[1]

    return (
        <li className="todo-item">
            <h4 className="todo-item__title">
                <Link to={'/todo/' + props.item.id}>
                    {props.item.title}
                </Link>
            </h4>
            <p className="todo-item__description">
                {props.item.description}
            </p>
            <div className="todo-item__buttons">
                <button
                    onClick={() => actions.changeStatus(props.item.id)}
                    className={`btn todo-item__action ${props.item.completed ? 'btn-warning' : 'btn-success'}`}
                >
                    {props.item.completed === true ? 'Отменить' : 'Выполнить'}
                </button>

                <TodoForm
                    todoTitle={props.item.title}
                    todoDescription={props.item.description}
                    todoId={props.item.id}
                />

                <button onClick={() => actions.deleteTodo(props.item.id)} className="btn btn-danger todo-item__delete">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    )
}


export default TodoItem