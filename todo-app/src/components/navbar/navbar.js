import { useState } from 'react'
import { Link } from 'react-router-dom'
import Backdrop from '../backdrop/backdrop'
import './navbar.css'

function Navbar() {
    const [visible, setVisible] = useState(false)

    const showNavbar = () => {
        setVisible(true)
    }

    const hideNavbar = () => {
        setVisible(false)
    }

    const links = [
        {
            title: 'Главная',
            url: '/'
        },
        {
            title: 'О нас',
            url: '/about'
        },
        {
            title: 'Контакты',
            url: '/contact-us'
        }
    ]

    const renderLinks = links.map(function (link, index) {
        return (
            <li key={index} className="navigation__item" onClick={hideNavbar}>
                <Link className="navigation__link" to={link.url}>{link.title}</Link>
            </li>
        )
    })

    return (
        <div className="navigation">
            <button className="navigation__toggler" onClick={showNavbar}>
                <i className="fas fa-bars"></i>
            </button>

            {visible === true ? <Backdrop hideNav={hideNavbar} /> : null}

            <nav className={`navigation__nav ${visible === true ? 'navigation__nav--show' : ''}`}>
                <ul className="navigation__list">
                    {renderLinks}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar