import "./Carousel.css"
// Toda a instalação do Swiper  
import { register } from 'swiper/element/bundle'

register ()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'

export function Carousel() {
    return(
        <>
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
        </>
    )
}