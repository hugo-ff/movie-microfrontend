import styled from 'styled-components';

const Input = styled.input`
  padding: 0.75rem ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.typography.fontSizeSm};
  line-height: ${(props) => props.theme.lineHeights.normal};
  width: 100%;
  border-width: ${(props) => props.theme.border.widthThin};
  border-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.border.radiusMedium};
  outline: none;
`;

export default { Input };
