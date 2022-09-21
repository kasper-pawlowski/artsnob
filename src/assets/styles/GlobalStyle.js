import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Rubik', sans-serif;
    height: 100%;
    background-color: #000000;
    color: #FFFFFF;
  }
  
  a, button, input, textarea {
    color: inherit;
    text-decoration: none;
    font-family: 'Rubik', sans-serif;
  }

  button {
    cursor: pointer;
  }

  ::selection {
  color: #FFFFFF;
  background: #000000;
}
`;
