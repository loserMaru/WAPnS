// В файле Timer.jsx
import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            // Запускаем таймер с интервалом 1000 мс (1 секунда)
            intervalId = setInterval(() => {
                // Обновляем состояние времени каждую секунду
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            // Если таймер не запущен, очищаем интервал
            clearInterval(intervalId);
        }

        // Очищаем интервал при размонтировании компонента или изменении зависимостей
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]); // Зависимость от состояния isRunning

    const startTimer = () => {
        // Запуск таймера
        setIsRunning(true);
    };

    const stopTimer = () => {
        // Остановка таймера
        setIsRunning(false);
    };

    const resetTimer = () => {
        // Сброс таймера
        setTime(0);
        setIsRunning(false);
    };

    return (
        <div>
            <h2>Применение хука useEffect для работы с таймером</h2>
            <div>
                <p>Время: {time} секунд</p>
                <button onClick={startTimer}>Старт</button>
                <button onClick={stopTimer}>Стоп</button>
                <button onClick={resetTimer}>Сброс</button>
            </div>
        </div>
    );
}
