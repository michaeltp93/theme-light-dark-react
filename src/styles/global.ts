import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::before, ::after {
      box-sizing: inherit;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 14px;
    color: #${({ theme }) => theme.colors.text};;
    font-family: sans-serif;
  }
`;
