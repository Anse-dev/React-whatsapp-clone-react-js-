import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 *,*::before, *::after{
    box-sizing: border-box;
  }
  body{
    font-size: 16px;
    margin: 0;
    padding: 0;
    background-color: #D9DBD5;
    font-family: 'Roboto', sans-serif;
    color: #4a4a4a;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
  img{
    max-width: 100%;
    width: 100%;
  }
  .App{
    position: relative;
/*     display: grid;
    place-items: center;
    height: 100vh; */
  }
  .App-inner{
    overflow: hidden;
    display: flex;
    background-color: #f2f2f2;
    height: 100vh;
    width: 100vw;
    box-shadow:  0px 0px 2px #F6F6F6;
    border-radius: 0.3rem;
    overflow-x: scroll;
  }
`;
