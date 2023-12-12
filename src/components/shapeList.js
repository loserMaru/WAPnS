// ShapeList.js
import React, { useState } from 'react';
import Modal from './Modal';

const ShapeList = ({ shapes, onRemoveShape }) => {
    const [shapeIndexToRemove, setShapeIndexToRemove] = useState(null);

    const openModal = (index) => {
        setShapeIndexToRemove(index);
    };

    const closeModal = () => {
        setShapeIndexToRemove(null);
    };

    const confirmRemoveShape = () => {
        if (shapeIndexToRemove !== null) {
            onRemoveShape(shapeIndexToRemove);
        }
        closeModal();
    };

    return (
        <div>
            <ul>
                {shapes.map((shape, index) => (
                    <li key={index}>
                        {shape}
                        <button onClick={() => openModal(index)}>Удалить</button>
                    </li>
                ))}
            </ul>

            {shapeIndexToRemove !== null && (
                <Modal onClose={closeModal} onConfirm={confirmRemoveShape}>
                    <p>Вы действительно хотите удалить фигуру?</p>
                    <button onClick={confirmRemoveShape}>Да</button>
                    <button onClick={closeModal}>Отмена</button>
                </Modal>
            )}
        </div>
    );
};

export default ShapeList;
