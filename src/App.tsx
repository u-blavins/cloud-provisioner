import React from 'react';
import './App.css';

export default function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img data-testid={'appLogo'} src={'./logo.svg'} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React
                </a>
            </header>
        </div>
    );
}
