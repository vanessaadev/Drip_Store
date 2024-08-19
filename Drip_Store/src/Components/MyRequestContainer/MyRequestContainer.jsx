import { MyProductRequestContainer } from '../MyProductRequestContainer/MyProductRequestContainer';
import './MyRequestContainer.css';

export function MyRequestContainer() {

    return (

        <>
            <section className='my-requests-container'>
                <header className='my-request-header-container'>
                    <h1>
                        Meus pedidos
                    </h1>

                    <span>
                        STATUS
                    </span>
                </header>

                <MyProductRequestContainer />
            </section>
        </>
    )
}