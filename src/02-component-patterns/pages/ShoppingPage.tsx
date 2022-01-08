import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';


export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard
                            product={product}
                            className="bg-dark text-white"
                            key={product.id}
                            value={shoppingCart[product.id]?.count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage
                                className="custom-image"
                                style={{
                                    boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                                }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>

            <div className='shopping-cart'>
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            className="bg-dark text-white"
                            key={key}
                            product={product}
                            style={{ width: '100px' }}
                            value={product.count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage
                                className="custom-image"
                                style={{
                                    boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                                }} />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
