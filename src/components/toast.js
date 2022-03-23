import React, { useState } from 'react'
import { Toast } from 'react-bootstrap'

const Toasts = ({ message, status }) => {
    const [show, setShow] = useState(true);

    return (
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>

                <strong className="me-auto">{status}</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    )
}

export default Toasts