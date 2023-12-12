// Modal.js
import React from 'react';
import './Modal.css'

const Modal = ({ onClose, onConfirm }) => {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <p>Вы действительно хотите удалить фигуру?</p>
                <button onClick={onConfirm}>Да</button>
                <button onClick={onClose}>Отмена</button>
            </div>
        </div>
    );
};

export default Modal;
