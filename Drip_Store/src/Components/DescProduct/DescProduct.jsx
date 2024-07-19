import './DescProduct.css'

import "./Carousel.css"
// Toda a instalação do Swiper  
import { register } from 'swiper/element/bundle'

register ()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'


import Tenis1 from '../../../public/TenisSlide.svg'

export function DescProduct() {
    return (
        <>
            <div className='descricaoProduto'>

            <Swiper 
                loop={true}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={false}
            >
                <SwiperSlide className="SwiperSlide">
                    <div className="slideGroup">
                    <div className="infoSlide">
                        <h5>Melhores Ofertas Personalizadas</h5>
                        <h1>Queima de Estoque Nike 🔥</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, similique.</p>
                        <button>Ver Ofertas</button>  
                    </div>
                    <div>
                        <img src="public/TenisSlide.svg" className="slide-image" />
                    </div>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        texto2
                    </div>
                    <div>
                        <img src="public/TenisSlide.svg" className="slide-image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        texto3
                    </div>
                    <div>
                        <img src="public/TenisSlide.svg" className="slide-image" />
                    </div>
                </SwiperSlide>
            </Swiper>


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
                <div className='dadosProduto'>
                    <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                    <p className='referenciasProduto'>Casual | Nike | REF:38416711</p>

                    <div className='imgDescProdRow'>
                        <p>estrelas</p>
                        <p className='avaliacao'>4.7</p>
                        <p className='referenciasProduto'>(90 avaliações)</p>
                    </div>

                    <h2 className='precoProd'>R$219,00</h2>

                    <h4 className='referenciasProduto'>Descrição do Produto</h4>

                    <p className='referenciasProduto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, autem nesciunt molestiae est vel perferendis!</p>

                    <div className='tamanhoSapato'>
                        <li className='tamanhoItem semList'>40</li>
                        <li className='tamanhoItem semList'>41</li>
                        <li className='tamanhoItem semList'>42</li>
                        <li className='tamanhoItem semList'>43</li>
                    </div>

                    <div className='cores'>
                        <p>cores</p>
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