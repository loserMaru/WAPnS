// App.js
import React, { useState } from 'react';
import ShapeList from './components/shapeList'; // убедитесь, что имя файла и компонента правильное
import AddShapeForm from './components/addShapeForm';

function App() {
    const [shapes, setShapes] = useState([]);

    const addShape = (shapeType) => {
        setShapes([...shapes, shapeType]);
    };

    const removeShape = (index) => {
        const newShapes = [...shapes];
        newShapes.splice(index, 1);
        setShapes(newShapes);
    };

    return (
        <div>
            <h1>Задание 4</h1>
            <div>
                <h2>Список фигур:</h2>
                <ShapeList shapes={shapes} onRemoveShape={removeShape} />
                <h2>Добавить новую фигуру:</h2>
                <AddShapeForm onAddShape={addShape} />
            </div>
        </div>
    );
}

export default App;
