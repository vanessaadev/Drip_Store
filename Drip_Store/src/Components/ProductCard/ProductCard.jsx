import ArrowRight from '../../assets/right-arrow.svg'
import TenisCard from '../../assets/tenisCard.svg'
import '../../App.css'
import './ProductCard.css'

export function ProductCard() {
    return (
        <>
            <section className='prodCard'>
                <div className='first'>
                    <h2>Produtos em alta</h2>
                    <a href="#">Ver todos <img src={ArrowRight} alt="" /></a>
                </div>
                <div className='second'>
                    <div>
                        <div><img src={TenisCard} alt="" /></div>
                        <p>Tênis</p>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <div className='prices'>
                            <p className='price'>$200</p>
                            <p className='priceDisc'>$100</p>
                        </div>
                    </div>
                    <div>
                        <div><img src={TenisCard} alt="" /></div>
                        <p>Tênis</p>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <div className='prices'>
                            <p className='price'>$200</p>
                            <p className='priceDisc'>$100</p>
                        </div>
                    </div>
                    <div>
                        <div><img src={TenisCard} alt="" /></div>
                        <p>Tênis</p>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <div className='prices'>
                            <p className='price'>$200</p>
                            <p className='priceDisc'>$100</p>
                        </div>
                    </div>
                    <div>
                        <div><img src={TenisCard} alt="" /></div>
                        <p>Tênis</p>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <div className='prices'>
                            <p className='price'>$200</p>
                            <p className='priceDisc'>$100</p>
                        </div>

                    </div>
                    <div>
                        <div><img src={TenisCard} alt="" /></div>
                        <p>Tênis</p>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <div className='prices'>
                            <p className='price'>$200</p>
                            <p className='priceDisc'>$100</p>
                        </div>

                    </div>
                    <div>
                        <div><img src={TenisCard} alt="" /></div>
                        <p>Tênis</p>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <div className='prices'>
                            <p className='price'>$200</p>
                            <p className='priceDisc'>$100</p>
                        </div>
                    </div>
                    <div>
                        <div><img src={TenisCard} alt="" /></div>
                        <p>Tênis</p>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <div className='prices'>
                            <p className='price'>$200</p>
                            <p className='priceDisc'>$100</p>
                        </div>
                    </div>
                    <div>
                        <div><img src={TenisCard} alt="" /></div>
                        <p>Tênis</p>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <div className='prices'>
                            <p className='price'>$200</p>
                            <p className='priceDisc'>$100</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductCard