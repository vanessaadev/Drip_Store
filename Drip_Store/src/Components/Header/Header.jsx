import { useLocation } from 'react-router-dom';
import cart from '../../assets/mini-cart.svg';
import IconSearch from '../../assets/Search.svg'
import { Logo } from '../Logo/Logo';
import './Header.css'
import { NavBar } from '../Navbar/NavBar';
import { Link } from 'react-router-dom';

export function Header() {

    const location = useLocation();

    const isActive = (url) => {
        if (location.pathname === url) {
            return "active";
        }
        return "";
    }

    return (
        <>
            <header>
                <div className='cabelhaco'>
                    <Logo />
                    <input type="text" name="" id="" placeholder="Pesquisar produto..." />
                    <img className='search' src={IconSearch} alt="" />
                    <div>
                    {/* <Link to='/products' className={isActive('/products')}>Produtos</Link> */}
                        <Link to="/CreateAccount" >Cadastre-se</Link>
                        <button><Link to="/login">Entrar</Link></button>
                    </div>
                    <img className='cart' src={cart} alt="Icone de Carrinho de Compra" />
                </div>
                <NavBar/>
            </header>
        </>
    )
}

export default Header
