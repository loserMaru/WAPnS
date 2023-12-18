import { useMemo } from 'react';

const usePagination = (totalPages) => {
    //массив будет пересчитываться только при изменении totalPages
    const pagesArray = useMemo(() => {
        let result = [];
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1);
        }
        return result;
    }, [totalPages]);//зависимость

    return pagesArray;
};

export default usePagination;
