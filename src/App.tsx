import React from 'react';
import './App.css';
import BootstrapButton from './components/generic-components/buttons/BootstrapButton';

export default function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img data-testid={'appLogo'} src={'./src/logo.svg'} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React
                </a>
                <BootstrapButton buttonText={'Button'} type={'button'} size={'lg'} variant={'primary'} />
            </header>
        </div>
    );
}
