import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}
height, body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: black;
  color: #333;
  font-size: 16px;

}
`;

export default GlobalStyles;
