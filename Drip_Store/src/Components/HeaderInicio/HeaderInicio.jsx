import './HeaderInicio.css'
import { Logo } from '../Logo/Logo'

export function HeaderInicio() {
    return(
        <>
        <header className='header-inicial'>
            <div className='logo-inicial'>
                <Logo/>
            </div>
        </header>
        </>
    )

}