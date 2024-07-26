import './ProductPage.css'
import ArrowBottom from '../../assets/arrow-bottom.svg'
import TenisCard from '../../assets/tenisCard.svg'


export function ProductPage() {
    const tenis = {
            nome: 'Tênis',
            descricao: 'K-Swiss V8 - Masculino',
            descPorc: '30% OFF',
            preco: '$200',
            desconto: '$100',
            image: TenisCard
        }

    // Cria um array com 15 elementos iguais ao objeto tenis
    const tenisArray = Array(15).fill(tenis);
    
    return (
        <>
            <div className='bg-color'>
                <section>
                    <div className='filter-option'>
                        <p>
                            <span>Resultados para "Tênis" </span>- {tenisArray.length} produtos
                        </p>
                        <div class="ordenar-por">
                            <span>Ordenar por:</span>
                            <select id="ordenacao" name="ordenacao">
                                <option value="menor-preco">Mais relevantes</option>
                                <option value="menor-preco">Menor preço</option>
                                <option value="maior-preco">Maior preço</option>
                            </select>
                        </div>
                    </div>
                    <div className='div-geral'>
                        <div className='filter'>
                            <p>Filtrar por</p>
                            <hr />
                            <p>Marka</p>
                            <form>
                                <div>
                                    <input type="checkbox" checked />
                                    <label htmlFor="">Adidas</label>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label htmlFor="">Calenciaga</label>
                                </div>
                                <div>
                                    <input type="checkbox" checked />
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
                                    <input type="checkbox" checked />
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
                                    <input type="checkbox" checked />
                                    <label htmlFor="">Masculino</label>
                                </div>
                                <div>
                                    <input type="checkbox" checked />
                                    <label htmlFor="">Feminino</label>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label htmlFor="">Unissex</label>
                                </div>
                            </form>
                            <p>Estado</p>
                            <div>
                                <input type="radio" checked />
                                <label htmlFor="">Novo</label>
                            </div>
                            <div>
                                <input type="radio" />
                                <label htmlFor="">Usado</label>
                            </div>
                        </div>
                        <div className='cards'>
                            {tenisArray.map((item, index) => (
                                <div key={index}>
                                    <div><img src={item.image} alt={item.nome} /></div>
                                    <p>{item.nome}</p>
                                    <h3>{item.descricao}</h3>
                                    <div className='prices'>
                                        <p className='price'>{item.preco}</p>
                                        <p className='priceDisc'>{item.desconto}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}