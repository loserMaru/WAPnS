// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
            <div className="modal-content">
                <p>Вы действительно хотите удалить фигуру?</p>
                <button onClick={onConfirm}>Да</button>
                <button onClick={onClose}>Отмена</button>
            </div>
        </div>
    );
};

export default Modal;
