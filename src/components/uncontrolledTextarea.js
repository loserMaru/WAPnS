import {useRef} from "react";

const UncontrolledTextarea = () => {
    const textareaRef = useRef(null);

    const handleButtonClick = () => {
        alert(`Значение текстового поля: ${textareaRef.current.value}`);
    };

    return (
        <div>
            <textarea ref={textareaRef}/>
            <button onClick={handleButtonClick}>Получить значение</button>
        </div>
    );
}

export default UncontrolledTextarea;
