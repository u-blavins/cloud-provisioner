import 'bootstrap/dist/css/bootstrap.min.css';

import CssBaseline from '@mui/material/CssBaseline';
import NavigationBar from 'components/common/NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';

interface AppState {
    isDark: boolean;
}

const App = () => {
    const [appState, setAppState] = useState<AppState>({ isDark: true });

    const setTheme = () => {
        return createTheme({
            palette: {
                mode: appState.isDark ? 'dark' : 'light',
            },
        });
    };

    return (
        <ThemeProvider theme={setTheme()}>
            <CssBaseline />
            <BrowserRouter>
                <NavigationBar
                    isDark={appState.isDark}
                    themeToggle={() => setAppState({ ...appState, isDark: !appState.isDark })}
                />
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
