import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

export function NavBar() {

    const location = useLocation();

    const isActive = (url) => {
        if (location.pathname === url) {
            return "active";
        }
        return "";
    }

    return (
        <>
            <div className='navbar'>
                <ul>
                    <li>
                        <Link to='/' className={isActive('/')}>Home</Link>
                    </li>
                    <li>
                        <Link to='/products' className={isActive('/products')}>Produtos</Link>
                    </li>
                    <li>
                        <Link to='' className={isActive('')}>Categorias</Link>
                    </li>
                    <li>
                        <Link to='' className={isActive('')}>Meus Pedidos</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}