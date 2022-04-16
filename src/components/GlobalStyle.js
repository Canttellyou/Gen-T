import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
   font-family: Trap;
   src: url("Trap-Black 300.otf") format("opentype");
   font-weight: lighter;
}

/* @font-face {
   font-family: Trap;
   src: url("assets/fonts/ObjectSans-Regular.otf") format("opentype");
   font-weight: normal;
} */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  
    body{
        background: white; 
  font-family: 'Jost', sans-serif;
position: relative;
color: #E8E1E0;

    }


`;

export default GlobalStyle;
