import "./Carousel.css"
// Toda a instalação do Swiper  
import { register } from 'swiper/element/bundle'

register ()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'
import { ButtonRosa } from "../ButtonRosa/ButtonRosa"

export function Carousel() {
    return(
        <>
            {/* <section> */}
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
                            <p className="textResponsive">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, similique.</p>
                            <ButtonRosa/>
                        </div>
                        <div>
                            <img src="public/TenisSlide.svg" className="slide-image" />
                        </div>
                        </div>
                
                    </SwiperSlide>
                    <SwiperSlide className="SwiperSlide">
                        <div className="slideGroup">
                        <div className="infoSlide">
                            <h5>Melhores Ofertas Personalizadas</h5>
                            <h1>Queima de Estoque Nike 🔥</h1>
                            <p className="textResponsive">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, similique.</p>
                            <ButtonRosa/>
                        </div>
                        <div>
                            <img src="public/TenisSlide.svg" className="slide-image" />
                        </div>
                        </div>
                
                    </SwiperSlide>
                    <SwiperSlide className="SwiperSlide">
                        <div className="slideGroup">
                        <div className="infoSlide">
                            <h5>Melhores Ofertas Personalizadas</h5>
                            <h1>Queima de Estoque Nike 🔥</h1>
                            <p className="textResponsive">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, similique.</p>
                            <ButtonRosa/>
                        </div>
                        <div>
                            <img src="public/TenisSlide.svg" className="slide-image" />
                        </div>
                        </div>
                
                    </SwiperSlide>
                </Swiper>
            {/* </section> */}
        </>
    )
}