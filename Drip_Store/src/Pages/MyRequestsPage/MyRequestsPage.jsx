import { MyRequestContainer } from '../../Components/MyRequestContainer/MyRequestContainer';
import './MyRequestsPage.css';
import { MyRequestsNavigator } from '../../Components/MyRequestsNavigator/MyRequestsNavigator';
import Layout from '../Layout/Layout';

export function MyRequestPage() {

    return (

        <Layout>
            <div className='my-request-page-content'>
                <MyRequestsNavigator />
                <MyRequestContainer />
            </div>
        </Layout>

    )
}
