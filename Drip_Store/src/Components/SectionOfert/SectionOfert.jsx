import './SectionOfert.css'
import { ButtonRosa } from "../ButtonRosa/ButtonRosa"
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import sapato from '../../../public/sapato.png'
import fundo_sapato from '../../../public/fundo_sapato.png'
import { NavLink } from 'react-router-dom'

export function SectionOfert() {

    function ScrollTop() {
        const {pathname} = useLocation();

        useEffect(() => {
            window.scrollTo(0,0);
        }, [pathname]);
        return null
    };

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

                <NavLink to='/viewProduct' onClick={ScrollTop}>
                <ButtonRosa/>
                </NavLink>

            </div>

        </div>
        </>
    )
}