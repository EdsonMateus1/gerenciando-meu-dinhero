import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * { 
        padding: 0px;
        margin: 0px;
        box-sizing: border-box; 
     }
     html,body,#root{
        height: 100%;
     }
     *,button,input{
        border: 0px;
        outline: 0px;
        font-family: "Ronoto",sans-serif
     }
     button{
        cursor: pointer;
     }
`;
