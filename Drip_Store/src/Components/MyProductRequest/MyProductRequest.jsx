/* eslint-disable react/prop-types */
import './MyProductRequest.css'

export function MyProductRequest({ product }) {

    return (
        <>
            <hr className='line-top-product'/>
            <div className='my-product-container'> 
                <section>
                    <figure>
                        <img src={product.urlImage} alt="" />
                    </figure>

                    <div>
                        <span>
                            {product.nPedido}
                        </span>
                        <h2>
                            {product.title}
                        </h2>
                    </div>
                </section>

                <span
                    className={product.status}
                >
                    {product.status == 'transito' ? 'produto em trânsito' : product.status}
                </span>
            </div>
        </>
    )
}