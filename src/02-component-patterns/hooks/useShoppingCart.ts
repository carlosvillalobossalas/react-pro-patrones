import { useState } from "react";
import { ProductInCart, Product } from '../interfaces/interfaces';

export const useShoppingCart = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCart(prevCart => {

            const productInCart: ProductInCart = prevCart[product.id] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...prevCart,
                    [productInCart.id]: productInCart
                }
            }

            //Borrar el producto
            const { [product.id]: toDelete, ...rest } = prevCart;
            return rest;

            // if (count === 0) {
            //     const { [product.id]: toDelete, ...rest } = prevCart;
            //     return { ...rest }
            // }

            // return {
            //     ...prevCart,
            //     [product.id]: {
            //         ...product,
            //         count
            //     }
            // }
        })
    }
    return { onProductCountChange, shoppingCart }
}
