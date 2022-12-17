import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import BootstrapButton from './BootstrapButton';

describe('Bootstrap Button Test Suite', () => {
    test('component renders', async () => {
        const testButton = render(<BootstrapButton buttonText='Test Button' type='button' />);
        expect(testButton.getByText('Test Button')).toBeDefined();
    });
});
