import { useEffect, useState } from 'react';
import { MyProductRequest } from '../MyProductRequest/MyProductRequest';
import './MyProductRequestContainer.css';

export function MyProductRequestContainer() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('../../../api/requests.json')

            .then((response) => response.json())

            .then((data) => setProducts(data))

            .catch((error) => { console.error('Erro ao buscar os produtos:', error) })
        ;

    }, []);

    return (    
        <div className='my-product-listing-container'>
            {products.map((product) => (
                    <MyProductRequest key={product.nPedido} product={product} />
            ))}
        </div>
    );
}
