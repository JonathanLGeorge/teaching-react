import React from 'react'
import ReactDOM from 'react-dom'

const Portal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer show modals visible active">
            <div className="ui raised very padded text container segment">
                <h1>I am modal</h1>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Portal