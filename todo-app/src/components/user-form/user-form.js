import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/user-context'
import './user-form.css'


function UserForm(props) {
    const [value, setValue] = useState('')

    const actions = useContext(UserContext)[1]

    const handleNameChange = (e) => {
        // Записываем в поле name значение инпута
        setValue(e.target.value)
    }

    const submitForm = (event) => {
        event.preventDefault()

        if (value.trim().length === 0) {
            return false
        }

        actions.login(value)
    }

    return (
        <div className="container">
            <form onSubmit={submitForm} className="user-form">
                <h3 className="user-form__title">Пожалуйста, представтесь</h3>
                <input value={value} onChange={handleNameChange} className="form-control user-form__input" type="text" placeholder="Введите ваше имя" />
                <button className="btn btn-primary user-form__button">Войти</button>
            </form>
        </div>
    )
}

export default UserForm