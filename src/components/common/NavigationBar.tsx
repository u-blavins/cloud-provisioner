import '../styles/Background.scss';

import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationBar = (_props: any) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    return (
        <span className='header'>
            <Navbar bg='nav-bar' variant='dark' expand='lg' sticky='top'>
                <Navbar.Brand data-testid='navbar-brand' className='navbar-brand' onClick={() => navigate('/')}>
                    <span>CLOUD PROVISIONER</span>
                </Navbar.Brand>
            </Navbar>
        </span>
    );
};

export default NavigationBar;
