import {createGlobalStyle} from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  button {
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    background: none;
    border: 0;
  }
`
