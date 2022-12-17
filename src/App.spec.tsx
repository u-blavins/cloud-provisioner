import 'jest';
import { render } from '@testing-library/react';
import App from './App';

describe('App Test Suite', () => {
    test('component renders', async () => {
        const page = render(<App />);
        expect(page.getByTestId('appLogo')).toBeDefined();
    });
});
