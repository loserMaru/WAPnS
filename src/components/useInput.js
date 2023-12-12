import {useState} from 'react';

const useInput = (initial, required) => {
    const [value, setValue] = useState(initial);
    const [error, setError] = useState(null);

    return {
        value,
        error,
        onChange: (e) => setValue(e.target.value),
        onBlur: () => {
            if (!value && required) setError("Required field");
            else setError(null);
        },
    };
};

export default useInput;
