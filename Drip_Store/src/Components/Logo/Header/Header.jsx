import cart from '../../assets/minicart.svg';
import IconSearch from '../../assets/Search.svg'
import { Logo } from '../Logo/Logo';
import './Header.css'
import { NavBar } from '../navbar/NavBar';

export function Header() {
    return (
        <>
            <header>
                <div>
                    <Logo />
                    <input type="text" name="" id="" placeholder="Pesquisar produto..." />
                    <img className='search' src={IconSearch} alt="" />
                    <div>
                        <a href="">Cadastre-se</a>
                        <button>Entrar</button>
                    </div>
                    <img className='cart' src={cart} alt="Icone de Carrinho de Compra" />

                </div>
                <NavBar/>
            </header>
        </>
    )
}
