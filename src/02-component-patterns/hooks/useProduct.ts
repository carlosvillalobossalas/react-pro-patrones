import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    value?: number;
    onChange?: (args: onChangeArgs) => void;
    initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    console.log(initialValues?.count)
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0); //no puede ser menor que 0
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount); //no puede ser mayor que el maximo
        }
        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }


    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value)
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues?.maxCount,
        maxCount: initialValues?.maxCount,
        reset
    }
}
