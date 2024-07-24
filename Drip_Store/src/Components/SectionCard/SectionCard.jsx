import { ButtonCard } from '../ButtonCard/ButtonCard'
import './SectionCard.css'

export function SectionCard() {
    return (
        <>
            <div className='color-bg'>
                <section className='ContainerSectionCard'>
                    <div className='container-title-card'>
                        Coleções em destaque
                    </div>
                    <div className='container-collection'>
                        <div className='collection-1'>
                            <div className='oferta'>
                                30% OFF
                            </div>
                            <div>
                                <h3>Novo Drop Supreme</h3>
                            </div>
                            <ButtonCard/>
                        </div>
                        <div className='collection-2'>
                            <div className='oferta'>
                                30% OFF
                            </div>
                            <div>
                                <h3>Coleção Adidas</h3>
                            </div>
                            <ButtonCard/>
                        </div>
                        <div className='collection-3'>
                            <div className='oferta'>
                                30% OFF
                            </div>
                            <div>
                                <h3>Novo Beat Bass</h3>
                            </div>
                            <ButtonCard/>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
