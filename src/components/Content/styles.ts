import styled from "styled-components";

export const Maincontainer = styled.main `
     padding: 10px;
     grid-area: CT;
     background-color: ${props => props.theme.colors.primary};
     color: ${props => props.theme.colors.white};
     overflow-y: scroll;
     height: calc(100vh - 70px);

     ::-webkit-scrollbar{
          width: 10px;
     }
     ::-webkit-scrollbar-thumb{
          background-color: ${props => props.theme.colors.secondary};
          border-radius: 10px;
     }
`
