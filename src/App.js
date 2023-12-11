import React, {useState} from 'react';
import ImageContainer from './components/imageContainer';
import CustomizableImage from './components/customizableImage';
import ControlledTextarea from "./components/controlledTextarea";
import UncontrolledTextarea from "./components/uncontrolledTextarea";
import GuestGreeting from "./components/guestGreeting";
import UserGreeting from "./components/userGreeting";
import ShapeList from "./components/shapeList";
import AddShapeForm from "./components/addShapeForm";

function App() {
    // Задание 1
    const imageStyles = {
        width: '800px',
        height: '400px',
    };

    // Задание 3
    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        if (username) {
            setIsLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setUsername('');
        setIsLoggedIn(false)
    };

    // Задание 4
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
            <h1>Задание 1</h1>
            <ImageContainer>
                <CustomizableImage
                    src="https://w.forfun.com/fetch/ef/ef1452df71a254915caa2d55ef5260a7.jpeg"
                    alt="Customizable Image"
                    style={imageStyles}
                />
            </ImageContainer>

            <h1>Задание 2</h1>
            <div>
                <h2>Управляемый компонент:</h2>
                <ControlledTextarea/>
                <h2>Неуправляемый компонент:</h2>
                <UncontrolledTextarea/>
            </div>

            <h1>Задание 3</h1>
            <div>
                <input
                    type="text"
                    placeholder="Введите ваше имя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={handleLogin}>Войти</button>
                {isLoggedIn ? (
                    <UserGreeting username={username} onLogout={handleLogout}/>
                ) : (
                    <GuestGreeting/>
                )}
            </div>

            <h1>Задание 4</h1>
            <div>
                <h2>Список фигур:</h2>
                <ShapeList shapes={shapes} onRemoveShape={removeShape}/>
                <h2>Добавить новую фигуру:</h2>
                <AddShapeForm onAddShape={addShape}/>
            </div>
        </div>
    );
}

export default App;
