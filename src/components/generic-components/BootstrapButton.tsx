import Button from 'react-bootstrap/Button';
import { ButtonVariant } from 'react-bootstrap/esm/types';

export interface ButtonProps {
    'data-testid'?: string;
    buttonText: string;
    variant?: ButtonVariant;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    size?: 'sm' | 'lg';
    type: 'button' | 'reset' | 'submit' | 'null';
    onClick?: () => void;
}

export default function BootstrapButton(props: ButtonProps) {
    const testId = props['data-testid'] ?? `${props.buttonText}-bootstrap-button`;
    return <Button data-testid={testId}>{props.buttonText}</Button>;
}
