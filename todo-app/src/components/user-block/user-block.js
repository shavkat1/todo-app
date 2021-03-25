import React, { useContext } from 'react'
import { TodoContext } from '../../context/todo-context'
import { UserContext } from '../../context/user-context'
import './user-block.css'

const UserBlock = () => {
    const [name, actions] = useContext(UserContext)
    const todoActions = useContext(TodoContext)[1]

    const logoutHandler = () => {
        actions.logout()
        todoActions.clearTodo()
    }

    return (
        <div className="user-block">
            <h2>Добро пожаловать на сайт, {name}</h2>
            <button className="btn btn-danger" onClick={logoutHandler}>Выйти</button>
        </div>
    )
}

export default UserBlock