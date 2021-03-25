export function getAllTodosFromLocalStorage() {
    return JSON.parse(localStorage.getItem('todos'))
}

export function saveTodosToLocalStorage(array) {
    localStorage.setItem('todos', JSON.stringify(array))
}

export function deleteTodosFromLocalStorage() {
    localStorage.removeItem('todos')
}