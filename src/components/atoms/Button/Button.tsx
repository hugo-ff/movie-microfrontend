import { FC } from 'react';

import styled from './styles';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  ariaLabel?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  ariaLabel,
}) => {
  return (
    <styled.Button
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      aria-disabled={disabled}
      aria-label={ariaLabel ?? (typeof children === 'string' ? children : '')}
    >
      {children}
    </styled.Button>
  );
};
