import { Link } from 'react-router-dom'
import './NavBar.css'

export function NavBar() {
    return (
        <>
            <div className='navbar'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Produtos</Link>
                    </li>
                    <li>
                        <Link to=''>Categorias</Link>
                    </li>
                    <li>
                        <Link to=''>Meus Pedidos</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}