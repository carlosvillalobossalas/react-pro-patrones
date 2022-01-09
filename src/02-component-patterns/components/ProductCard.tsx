import { createContext, CSSProperties } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string;
    product: Product;
    style?: CSSProperties;
    value?: number;
    onChange?: (args: onChangeArgs) => void;
    initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product,
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount,
                        product,
                        reset,
                        increaseBy,
                    })
                }
            </div>
        </Provider>
    )
}

