export function getUserFromLocalStorage() {
    return localStorage.getItem('username')
}

export function saveUserToLocalStorage(username) {
    localStorage.setItem('username', username)
}

export function deleteUserFromLocalStorage() {
    localStorage.removeItem('username')
}