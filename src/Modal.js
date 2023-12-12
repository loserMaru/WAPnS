import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const Modal = ({ show, onClose, children }) => {
    return (
        <CSSTransition
            in={show}
            timeout={300}
            classNames="modal"
            unmountOnExit
        >
            <div className="modal" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </CSSTransition>
    );
};

export default Modal;
