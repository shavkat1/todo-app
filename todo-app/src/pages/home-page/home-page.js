import { useContext } from 'react'
import { UserContext } from '../../context/user-context'
import { TodoContext } from '../../context/todo-context'

import Header from '../../components/header/header'
import UserForm from '../../components/user-form/user-form'
import Column from '../../components/column/column'
import UserBlock from '../../components/user-block/user-block'
import TodoForm from '../../components/todo-form/todo-form'
import './home-page.css'

function HomePage() {
    const [name] = useContext(UserContext)
    const [todos] = useContext(TodoContext)

    const activeTodos = todos.filter(function (todo) {
        if (todo.completed === false) {
            return todo
        } else {
            return false
        }
    })

    const inActiveTodos = todos.filter(function (todo) {
        if (todo.completed === true) {
            return todo
        } else {
            return false
        }
    })

    return (
        <div>

            {name !== '' ? <main>
                <div className="container">
                    <UserBlock />
                    <div className="columns">
                        <Column title={"Все дела"} todos={todos} />
                        <Column title={"Активные дела"} todos={activeTodos} />
                        <Column title={"Выполненные дела"} todos={inActiveTodos} />
                    </div>

                </div>

                <TodoForm />
            </main> : <UserForm />}
        </div>
    )
}

export default HomePage