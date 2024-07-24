import Camiseta from '../../assets/tshirt.svg'
import Calca from '../../assets/pants.svg';
import Bone from '../../assets/pants.svg';
import Headphone from '../../assets/headphones.svg';
import Tenis from '../../assets/sneakers.svg';

import './Section.css';
import '../../../src/App.css';

export function Section() {
    return (
        <>
            <div className='color-bg'>
                <section className='color'>
                        <h2>Coleções em destaque</h2>
                    <div className='main'>
                        <div className='f'>
                            <picture><img src={Camiseta} alt="aa" /></picture>
                            <p>Camisetas</p>
                        </div>
                        <div className='f'>
                            <picture><img src={Calca} alt="aa" /></picture>
                            <p>Calças</p>
                        </div>
                        <div className='f'>
                            <picture><img src={Bone} alt="aa" /></picture>
                            <p>Bonés</p>
                        </div>
                        <div className='f'>
                            <picture><img src={Headphone} alt="aa" /></picture>
                            <p>Headphones</p>
                        </div>
                        <div className='f'>
                            <picture><img src={Tenis} alt="aa" /></picture>
                            <p>Tênis</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Section