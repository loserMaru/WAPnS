    import { useState, useEffect } from 'react';

    export const useLocalStorage = (initialValue = [], key = '') => {
        const getValue = () => {
            const storage = localStorage.getItem(key);
            return storage ? JSON.parse(storage) : initialValue;
        };

        const [value, setValue] = useState(getValue);

        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, [value, key]);

        return [value, setValue];
    };