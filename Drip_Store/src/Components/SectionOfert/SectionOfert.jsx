import './SectionOfert.css'

import sapato from '../../../public/sapato.png'
import fundo_sapato from '../../../public/fundo_sapato.png'

export function SectionOfert() {
    return(
        <>
        <div className='container-ofert'>

            <div className='image-ofert'>
                
                <div className='sapato'>
                     <img src={sapato} alt="sapato" />
                </div>

                <div className='fundo-sapato'>
                    <img src={fundo_sapato} alt="fundo-sapato" />
                </div>

            </div>

            <div className='conteudo-ofert'>
                <span className='title-ofert'>Oferta especial</span>

                <h2>Air Jordan edição de colecionador</h2>

                <span className='lorem-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sed ad accusantium suscipit, fugit assumenda rerum. Labore officiis voluptates repellendus illum nisi odio, quod vero pariatur quis iste saepe exercitationem.</span>

                <button className='btn-ofert'>Ver Oferta</button>

            </div>

        </div>
        </>
    )
}