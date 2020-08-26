import React, {FC, useState} from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface AlertProps {
    message: string;
    onClose: () => void
}

const Alert: FC < AlertProps > = ({message, onClose}) => {
    const [show, setShow] = useState(true);

    const onHide = () => {
        setShow(false);
    }

    return (
        <Modal show={show}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                <p> {message} </p>
            </Modal.Body>
            <Modal.Footer className="p-5">
                <Button className="btn-danger"
                    onClick={onHide}
                    size="sm">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Alert;
