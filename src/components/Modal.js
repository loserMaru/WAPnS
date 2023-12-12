// Modal.js
import React from 'react';

const Modal = ({onClose, onConfirm }) => {
    return (
            <div className="modal-content">
                <p>Вы действительно хотите удалить фигуру?</p>
                <button onClick={onConfirm}>Да</button>
                <button onClick={onClose}>Отмена</button>
            </div>
    );
};

export default Modal;
