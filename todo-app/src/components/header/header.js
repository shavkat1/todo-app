
import Navbar from '../navbar/navbar'

import './header.css'

function Header() {

    return (
        <div className="container">
            <header className="header">
                <h1>Todo List</h1>

                <Navbar />
            </header>
        </div>
    )
}

export default Header