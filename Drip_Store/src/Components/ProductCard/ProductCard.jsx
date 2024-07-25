import ArrowRight from '../../assets/right-arrow.svg'
import TenisCard from '../../assets/tenisCard.svg'
import '../../App.css'
import './ProductCard.css'

import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const tenis = [
    {
        nome: 'Tênis',
        descricao: 'K-Swiss V8 - Masculino',
        descPorc: '30% OFF',
        preco: '$200',
        desconto: '$100',
        image: TenisCard
    },

    {
        nome: 'Tênis',
        descricao: 'K-Swiss V8 - Masculino',
        descPorc: '30% OFF',
        preco: '$200',
        desconto: '$100',
        image: TenisCard
    },

    {
        nome: 'Tênis',
        descricao: 'K-Swiss V8 - Masculino',
        preco: '$200',
        desconto: '$100',
        image: TenisCard
    },

    {
        nome: 'Tênis',
        descricao: 'K-Swiss V8 - Masculino',
        preco: '$200',
        desconto: '$100',
        image: TenisCard
    },

    {
        nome: 'Tênis',
        descricao: 'K-Swiss V8 - Masculino',
        preco: '$200',
        desconto: '$100',
        image: TenisCard
    },

    {
        nome: 'Tênis',
        descricao: 'K-Swiss V8 - Masculino',
        preco: '$200',
        desconto: '$100',
        image: TenisCard
    },

    {
        nome: 'Tênis',
        descricao: 'K-Swiss V8 - Masculino',
        preco: '$200',
        desconto: '$100',
        image: TenisCard
    },

    {
        nome: 'Tênis',
        descricao: 'K-Swiss V8 - Masculino',
        preco: '$200',
        desconto: '$100',
        image: TenisCard
    },


];

export function ProductCard({ quantidadeProdutos }) {

    // --------- Navega entre as páginas --------------
    const navigate = useNavigate()

    const handClick = () => navigate('/viewProduct')
    //-------------------------------------------------

    const produtosParaMostrar = tenis.slice(0, quantidadeProdutos);

    return (
        <div className='color-bg'>
            <section className='prodCard'>
                <div className='first'>
                    <h2>Produtos em alta</h2>
                    <Link to='/products'>Ver todos <img src={ArrowRight} alt="" /></Link>
                </div>
                <div className='second' onClick={handClick}>
                    {produtosParaMostrar.map((produto, index) => (
                        <div key={index}>
                            <div>
                                <img src={produto.image} alt="" />
                                <p className='descPorc'>{produto.descPorc}</p>
                            </div>
                            <p>{produto.nome}</p>
                            <h3>{produto.descricao}</h3>
                            <div className='prices'>
                                <p className='price'>{produto.preco}</p>
                                <p className='priceDisc'>{produto.desconto}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ProductCard