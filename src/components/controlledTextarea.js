import {useState} from "react";

const ControlledTextarea = () => {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <textarea value={text} onChange={handleTextChange} />
            <p>Значение текстового поля: {text}</p>
        </div>
    );
}

export default ControlledTextarea;