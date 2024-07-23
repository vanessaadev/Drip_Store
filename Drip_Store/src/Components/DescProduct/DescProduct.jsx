<<<<<<< HEAD
import './DescProduct.css'
import React from "react";
import Star from "../Stars/Stars"
import { FaStar } from 'react-icons/fa'
import ColorShoes from "../ColorsShoes/ColorsShoes"
import SlideShoes from "../SlideShoes/SlideShoes"

// import Tenis1 from '../../../public/TenisSlide.svg'
=======
import './DescProduct.css';
import React, { useState } from 'react';
import Star from '../Stars/Stars';
import { FaStar } from 'react-icons/fa';
import ColorShoes from '../ColorsShoes/ColorsShoes';

import Tenis1 from '../../../public/TenisSlide.svg';

const coresFundo = [
    { cor: '#E2E3FF' },
    { cor: '#FFE8BC' },
    { cor: '#FFC0BC' },
    { cor: '#DEC699' },
    { cor: '#E8DFCF' }
];
>>>>>>> 66fcf0b94360585e6375a5232cd2e049418abc58

export function DescProduct() {
    const [indiceCor, setIndiceCor] = useState(0);

    const proximaCor = () => {
        setIndiceCor((indiceCor + 1) % coresFundo.length);
    };

    const anteriorCor = () => {
        setIndiceCor((indiceCor - 1 + coresFundo.length) % coresFundo.length);
    };

    return (
        <div className='containerDP'>
            <div className='caminhoTenis'>
                <h5>Home / Produtos / Tênis / Nike / Tênis Nike Revolution</h5>
            </div>

            <div className='descricaoProduto'>

                <div className='imgDescProd'>
<<<<<<< HEAD
                    <div className='imagemGrande'>
                        {/* <img src={Tenis1} alt="" /> */}
                        
=======
                    <div className='imagemGrande' style={{ backgroundColor: coresFundo[indiceCor].cor }}>
                        <img src={Tenis1} alt="" />

                        {/* Botões de navegação */}
                        <div className='btn-slide'>
                            <button className="botaoNavegacao " onClick={anteriorCor}></button>
                            <button className="botaoNavegacao " onClick={proximaCor}></button>
                        </div>

>>>>>>> 66fcf0b94360585e6375a5232cd2e049418abc58
                    </div>

                    {/* Miniaturas de imagens (alteram o slide de cor) */}
                    <div className='miniImagens'>
<<<<<<< HEAD
                        {/* <img src={Tenis1} className="item1" alt="" />
                        <img src={Tenis1} className="item2" alt="" />
                        <img src={Tenis1} className="item3" alt="" />
                        <img src={Tenis1} className="item4" alt="" />
                        <img src={Tenis1} className="item5" alt="" /> */}
                        <SlideShoes/>
=======
                        {coresFundo.map((cor, index) => (
                            <img key={index} onClick={() => setIndiceCor(index)} src={Tenis1} className={`item${index + 1}`} alt="" />
                        ))}
>>>>>>> 66fcf0b94360585e6375a5232cd2e049418abc58
                    </div>

                    
                    
                </div>

                <div className='dadosProduto'>
                    <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                    <p className='referenciasProduto'>Casual | Nike | REF:38416711</p>

                    <div className='imgDescProdRow'>
                        <Star />
                        <p className='avaliacao'>4.7 <FaStar /></p>
                        <p className='referenciasProduto'>(90 avaliações)</p>
                    </div>

                    <h2 className='precoProd'>R$219,00</h2>
                    <h4 className='referenciasProduto'>Descrição do Produto</h4>
                    <p className='referenciasProduto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, autem nesciunt molestiae est vel perferendis!</p>
                    <h4 className='referenciasProduto'>Tamanho</h4>

                    <div className='tamanhoSapato'>
                        <li className='tamanhoItem semList'>39</li>
                        <li className='tamanhoItem semList'>40</li>
                        <li className='tamanhoItem semList'>41</li>
                        <li className='tamanhoItem semList'>42</li>
                        <li className='tamanhoItem semList'>43</li>
                    </div>

                    <h4 className='referenciasProduto'>Cores</h4>
                    <div className='cores'>
                        <ColorShoes />
                    </div>

                    <div>
                        <button className='btn-comprar'>Comprar</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DescProduct;