import './DescProduct.css'
import Tenis1 from '../../../public/TenisSlide.svg'

export function DescProduct() {
    return (
        <>
            <div className='descricaoProduto'>


                <div className='imgDescProd'>
                    <div className='imagemGrande'>
                        <img src={Tenis1} alt="" />
                    </div>
                    <div className='miniImagens'>
                        <img src={Tenis1} className="item" alt="" />
                        <img src={Tenis1} className="item" alt="" />
                        <img src={Tenis1} className="item" alt="" />
                        <img src={Tenis1} className="item" alt="" />
                        <img src={Tenis1} className="item" alt="" />
                    </div>
                </div>
                <div>
                    <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                    <p>Casual | Nike | REF:38416711</p>
                    <p>estrelas</p>
                    <p>Avaliação</p>
                    <p>(90 avaliações)</p>
                    <p>R$219,00</p>

                    <p>Descrição do Produto</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, autem nesciunt molestiae est vel perferendis!</p>

                    <div className='tamanho'>
                        <p>caixas com tamanhos</p>
                    </div>

                    <div className='cores'>
                        <p>cores</p>
                    </div>

                    <button>Comprar</button>

                    <p></p>
                </div>
            </div>
        </>
    )
}