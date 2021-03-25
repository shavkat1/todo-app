import Header from '../../components/header/header'
import './layout.css'

function Layout(props) {

    return (
        <div className="layout">
            <Header />

            <div className="layout__content">
                {props.children}
            </div>
        </div>
    )
}

export default Layout