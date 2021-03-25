import { createContext, useState } from 'react'
import { getUserFromLocalStorage, saveUserToLocalStorage, deleteUserFromLocalStorage } from '../utils/userLocalStorage'


export const UserContext = createContext()

export function UserContextProvider(props) {
    // Забираем из локального хранилища значение поля username
    const [name, setName] = useState(getUserFromLocalStorage() || '')

    const actions = {
        login: (value) => {
            setName(value)

            // Сораняет в поле username значение инпута
            saveUserToLocalStorage(value)
        },
        logout: () => {
            setName('')
            deleteUserFromLocalStorage()
        }
    }

    return (
        <UserContext.Provider value={[name, actions]}>
            {props.children}
        </UserContext.Provider>
    )
}