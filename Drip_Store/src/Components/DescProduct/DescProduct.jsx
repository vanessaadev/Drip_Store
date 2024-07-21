import './DescProduct.css'
import React from "react";
import Star from "../Stars/Stars"
import { FaStar } from 'react-icons/fa'
import ColorShoes from "../ColorsShoes/ColorsShoes"
import SlideShoes from "../SlideShoes/SlideShoes"


// Toda a instalação do Swiper  



import Tenis1 from '../../../public/TenisSlide.svg'

export function DescProduct() {
    return (
        <>
            <div className='descricaoProduto'>

            


                <div className='imgDescProd'>
                    <div className='imagemGrande'>
                        <SlideShoes/>
                        <img src={Tenis1} alt="" />
                    </div>
                    <div className='miniImagens'>
                        <img src={Tenis1} style={{ background: "red" }} className="item" alt="" />
                        <img src={Tenis1} className="item" alt="" />
                        <img src={Tenis1} className="item" alt="" />
                        <img src={Tenis1} className="item" alt="" />
                        <img src={Tenis1} className="item" alt="" />
                    </div>
                </div>
                <div className='dadosProduto'>
                    <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                    <p className='referenciasProduto'>Casual | Nike | REF:38416711</p>

                    <div className='imgDescProdRow'>
                        <p><Star/></p>
                        <p className='avaliacao'>4.7 <FaStar/></p>
                        <p className='referenciasProduto'>(90 avaliações)</p>
                    </div>

                    <h2 className='precoProd'>R$219,00</h2>

                    <h4 className='referenciasProduto'>Descrição do Produto</h4>

                    <p className='referenciasProduto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, autem nesciunt molestiae est vel perferendis!</p>

                    <h4 className='referenciasProduto'>Tamanho</h4>

                    <div className='tamanhoSapato'>
                        <li className='tamanhoItem semList'>40</li>
                        <li className='tamanhoItem semList'>41</li>
                        <li className='tamanhoItem semList'>42</li>
                        <li className='tamanhoItem semList'>43</li>
                    </div>

                    <h4 className='referenciasProduto'>Cores</h4>
                    <div className='cores'>
                        <ColorShoes/>
                    </div>

                    <div>
                        <button>Comprar</button>
                    </div>


                    <p></p>
                </div>
            </div>
        </>
    )
}