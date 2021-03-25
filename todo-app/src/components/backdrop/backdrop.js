import './backdrop.css'

function Backdrop(props) {

    return (
        <div className="backdrop" onClick={props.hideNav}></div>
    )
}

export default Backdrop