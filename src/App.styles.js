import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #f5f5f5;
  }
  * {
    font-family: 'Roboto';
  }
  ::-webkit-scrollbar{width:2px;height:2px;}
  ::-webkit-scrollbar-button{width:2px;height:2px;}
`;
