import { useContext, useState } from 'react'
import { TodoContext } from '../../context/todo-context'
import './todo-form.css'

function TodoForm(props) {
    const [value, setValue] = useState(props.todoTitle || '')
    const [description, setDescription] = useState(props.todoDescription || '')
    const [visible, setVisible] = useState(false)

    const actions = useContext(TodoContext)[1]

    const toggleModal = () => {
        setVisible(!visible)
    }

    const changeValue = (event) => {
        setValue(event.target.value)
    }

    const changeDescriptionValue = (event) => {
        setDescription(event.target.value)
    }

    const clearValue = () => {
        setValue('')
        setDescription('')
    }

    const submitForm = (event) => {
        event.preventDefault()

        // Проверка на пустоту
        if (value.trim() === '') {
            return false
        }


        if (props.todoId) {
            actions.changeTodo(props.todoId, value, description)
        } else {
            actions.addNewTodo(value, description)
            // Очищение поля ввода
            clearValue()
        }

        // Закрываем модальное окно
        toggleModal()
    }

    return (
        <div>
            {props.todoId ?
                <button onClick={toggleModal} className="btn btn-primary ms-3 me-1">
                    <i className="fas fa-pencil-alt"></i>
                </button>
                :
                <button onClick={toggleModal} className="btn btn-primary todo-modal-button">
                    <i className="fas fa-plus"></i>
                </button>
            }

            <div className={`todo-modal ${visible === true ? 'todo-modal--show' : ''}`}>
                <div className="todo-modal__content">
                    <button onClick={toggleModal} className="todo-modal__close">
                        <i className="fas fa-times"></i>
                    </button>
                    <form className="add-todo-form" onSubmit={submitForm}>
                        <h3>{props.todoTitle ? 'Изменить задачу' : 'Добавить задачу'}</h3>

                        <label className="form-label add-todo-form__label" htmlFor="todo-name">Добавить ToDo</label>

                        <input className="form-control add-todo-form__input" onChange={changeValue} value={value} id="todo-name" type="text" name="todo-name" placeholder="Введите название todo" />

                        <label htmlFor="todo-description">Добавить описание</label>

                        <input className="form-control add-todo-form__input" onChange={changeDescriptionValue} value={description} id="todo-description" type="text" name="todo-description" placeholder="Введите описание todo" />

                        <button className="btn btn-primary d-block add-todo-form__submit" type="submit">Отправить</button>
                        <button className="btn btn-secondary d-block add-todo-form__reset" onClick={clearValue} type="reset">Сбросить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoForm