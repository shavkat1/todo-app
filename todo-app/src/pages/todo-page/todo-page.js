import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { TodoContext } from '../../context/todo-context'

function TodoPage() {
    const [todos] = useContext(TodoContext)
    const params = useParams()

    console.log(params)

    const findedTodo = todos.find(function (todo, index) {
        if (todo.id == params.id) {
            return todo
        }

        return false
    })

    return (
        <div className="container todo-page mt-5">
            <div className="card">
                <div className="card-body">
                    <h1>Todo: {findedTodo.id}</h1>
                    <h2>{findedTodo.title}</h2>
                    <h3>{findedTodo.description}</h3>
                    <span>{findedTodo.completed ? 'Выполнено' : 'Не выполнено'}</span>
                </div>
            </div>
        </div>
    )
}


export default TodoPage