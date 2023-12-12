import React, { useState } from 'react';
import Modal from './Modal';
import './App.css'

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div>
            <button onClick={openModal}>Открыть модальное окно</button>

            <Modal show={modalVisible} onClose={closeModal}>
                <h1>Привет, это модальное окно!</h1>
                <button onClick={closeModal}>Закрыть</button>
            </Modal>
        </div>
    );
};

export default App;
