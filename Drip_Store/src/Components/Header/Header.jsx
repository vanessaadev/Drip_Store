import cart from '../../assets/mini-cart.svg';
import IconSearch from '../../assets/Search.svg'
import { Logo } from '../Logo/Logo';
import './Header.css'
import { NavBar } from '../Navbar/NavBar';

export function Header() {
    return (
        <>
            <header>
                <div className='cabelhaco'>
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

export default Header
