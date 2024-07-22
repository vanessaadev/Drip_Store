import { ButtonCard } from '../ButtonCard/ButtonCard'
import './SectionCard.css'

export function SectionCard() {
    return (
        <>
            <section>
                <div className='container-title-card'>
                    Coleções em destaque
                </div>
                <div className='container-collection'>
                    <div className='collection-1'>
                        <div className='oferta'>
                            30% OFF
                        </div>
                        <ButtonCard/>
                    </div>
                    <div className='collection-2'>
                        <div className='oferta'>
                            30% OFF
                        </div>
                        <ButtonCard/>
                    </div>
                    <div className='collection-3'>
                        <div className='oferta'>
                            30% OFF
                        </div>
                        <ButtonCard/>
                    </div>
                </div>

            </section>

        </>
    )
}
