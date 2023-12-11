import {useState} from "react";

const AddShapeForm = ({onAddShape}) => {
    const [shapeType, setShapeType] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (shapeType.trim() !== '') {
            onAddShape(shapeType);
            setShapeType('');
        }
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Тип фигуры"
                value={shapeType}
                onChange={(e) => setShapeType(e.target.value)}
            />
            <button type="submit">Добавить фигуру</button>
        </form>
    );
}

export default AddShapeForm;