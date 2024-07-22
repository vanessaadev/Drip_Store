import ArrowRight from '../../assets/right-arrow.svg'
import TenisCard from '../../assets/tenisCard.svg'
import '../../App.css'
import './ProductCard.css'

const tenis = [
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
    const produtosParaMostrar = tenis.slice(0, quantidadeProdutos);

    return (
        <section className='prodCard'>
            <div className='first'>
                <h2>Produtos em alta</h2>
                <a href="#">Ver todos <img src={ArrowRight} alt="" /></a>
            </div>
            <div className='second'>
                {produtosParaMostrar.map((produto, index) => (
                    <div key={index}>
                        <div><img src={produto.image} alt="" /></div>
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
    );
}

export default ProductCard