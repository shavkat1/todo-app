import React, { createContext, useState } from 'react'
import { getAllTodosFromLocalStorage, saveTodosToLocalStorage, deleteTodosFromLocalStorage } from '../utils/todosLocalStorage'


export const TodoContext = createContext()


export function TodoContextProvider(props) {
    const [todos, setTodos] = useState(getAllTodosFromLocalStorage() || [])

    const actions = {
        addNewTodo: (title, description) => {
            const newTodo = {
                id: Math.random(),
                title: title,
                description: description,
                completed: false
            }

            const newTodoList = [newTodo, ...todos]

            setTodos(newTodoList)
            saveTodosToLocalStorage(newTodoList)
        },

        changeTodo: (id, title, description) => {
            const newTodos = todos.map(function (todo) {
                if (todo.id === id) {
                    return { ...todo, title: title, description: description }
                } else {
                    return todo
                }
            })

            setTodos(newTodos)
            saveTodosToLocalStorage(newTodos)
        },

        changeStatus: (id) => {
            const newTodos = todos.map(function (todo) {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            })

            setTodos(newTodos)
            saveTodosToLocalStorage(newTodos)
        },
        deleteTodo: (id) => {
            const newTodos = todos.filter(function (todo) {
                if (todo.id === id) {
                    return false
                } else {
                    return todo
                }
            })

            setTodos(newTodos)
            saveTodosToLocalStorage(newTodos)
        },
        clearTodo: () => {
            setTodos([])
            deleteTodosFromLocalStorage()
        }
    }

    return (
        <TodoContext.Provider value={[todos, actions]}>
            {props.children}
        </TodoContext.Provider>
    )
}