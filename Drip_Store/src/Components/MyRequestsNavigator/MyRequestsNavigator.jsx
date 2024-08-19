import './MyRequestsNavigator.css';

export function MyRequestsNavigator() {

    return (
        <section className='my-requests-navigator-container'>

            <ul>
                <li>Meu perfil</li>
                <li className='active-li'>Meus pedidos</li>
                <li>Minhas infomações</li>
                <li>Métodos de pagamento</li>
            </ul>

        </section>
    )
}