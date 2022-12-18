import { Container } from 'react-bootstrap';
import '../styles/Background.scss';

import { Brightness4, Brightness7 } from '@mui/icons-material';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationBarProps {
    isDark: boolean;
    themeToggle: () => void;
}

const NavigationBar = (props: NavigationBarProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    return (
        <span className='header'>
            <Navbar bg='nav-bar' variant='dark' expand='lg' sticky='top'>
                <Navbar.Brand data-testid='navbar-brand' className='navbar-brand' onClick={() => navigate('/')}>
                    <span>Cloud Provisioner</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Container onClick={props.themeToggle} className='justify-content-end'>
                    {props.isDark ? <Brightness4 /> : <Brightness7 />}
                </Container>
            </Navbar>
        </span>
    );
};

export default NavigationBar;
