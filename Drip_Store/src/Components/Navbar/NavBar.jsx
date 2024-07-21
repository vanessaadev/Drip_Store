import './NavBar.css'
export function NavBar() {
    return (
        <>
            <div className='navbar'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Produtos</a></li>
                    <li><a href="viewproduct">Categorias</a></li>
                    <li><a href="#">Meus Pedidos</a></li>
                </ul>
            </div>
        </>
    )
}