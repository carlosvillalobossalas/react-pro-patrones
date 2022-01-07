import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
    className?: string;
    img?: string;
    style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {

    const { product } = useContext(ProductContext);

    let imgToShow: string;
    imgToShow = img ? img : (product.img ? product.img : noImage);

    return (
        <img
            alt='Product Pic'
            className={`${styles.productImg} ${className}`}
            src={imgToShow}
            style={style}
        />
    )
}