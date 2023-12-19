import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .spinner {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__svg {
      animation: ${spin} 1s linear infinite;
      fill: ${(props) => props.theme.colors.primary};
      width: 50px;
      height: 50px;
    }

    &__text {
      margin-top: ${(props) => props.theme.spacing.md};
      color: ${(props) => props.theme.colors.light};
    }
  }
`;

export default { Spinner };
