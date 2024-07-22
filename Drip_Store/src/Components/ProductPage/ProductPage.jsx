import './ProductPage.css'
import ArrowBottom from '../../assets/arrow-bottom.svg'
import TenisCard from '../../assets/tenisCard.svg'


export function ProductPage() {
    return (
        <>
            <section>
                    <div className='filter-option'>
                        <p>
                            <span>Resultados para "Tênis" </span>- 369 produtos
                        </p>
                        <button>
                            Ordernar por<span>: mais relevantes</span>
                            <img src={ArrowBottom} alt="" />
                        </button>
                    </div>
                <div className='div-geral'>
                    <div className='filter'>
                        <p>Filtrar por</p>
                        <hr />
                        <p>Marka</p>
                        <form>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Adidas</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Calenciaga</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">K-Swiss</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <div><label htmlFor="">Nike</label></div>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Puma</label>
                            </div>
                        </form>
                        <p>Categoria</p>
                        <form>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Esporte e lazer</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Casual</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Utilitário</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Corrida</label>
                            </div>
                        </form>
                        <p>Gênero</p>
                        <form>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Masculino</label>
                            </div>
                            <div>
                                <input type="checkbox" className='checkbox' />
                                <label htmlFor="">Feminino</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Unissex</label>
                            </div>
                        </form>
                        <p>Estado</p>
                        <div>
                            <input type="radio" />
                            <label htmlFor="">Novo</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label htmlFor="">Usado</label>
                        </div>
                    </div>
                    <div className='cards'>
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
                </div>

            </section>
        </>

    )
}