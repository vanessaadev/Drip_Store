import './SectionCard.css'

export function SectionCard() {
    return(
        
        <div className='containerSectionCard'>
        <div className='container-title-card'>
            Coleções em destaque
        </div>
        <div className='container-collection'>

            <div className='collection-1'>
                <div className='oferta'>
                    30% OFF
                </div>
                <h3>Novo Drop Supreme</h3>
                <button className='btn-comprar'>Comprar</button>
            </div>

            <div className='collection-2'>
                <div className='oferta'>
                    30% OFF
                </div>
                <h3>Coleção Adidas</h3>
                <button className='btn-comprar'>Comprar</button>
            </div>

            <div className='collection-3'>
                <div className='oferta'>
                    30% OFF
                </div>
                <h3>Novo Beats Bass</h3>
                <button className='btn-comprar'>Comprar</button>
            </div>

        </div>
        </div>
    )
}
