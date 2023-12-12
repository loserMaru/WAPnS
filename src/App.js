import React from 'react';
import useInput from './components/useInput';
import './App.css'

const App = () => {
    const nameInput = useInput('', true); // Поле обязательно для заполнения

    return (
        <div>
            <label>
                Имя:
                <input
                    type="text"
                    value={nameInput.value}
                    onChange={nameInput.onChange}
                    onBlur={nameInput.onBlur}
                />
                <div>
                    {nameInput.error && <span>{nameInput.error}</span>}
                </div>
            </label>
        </div>
    );
};

export default App;