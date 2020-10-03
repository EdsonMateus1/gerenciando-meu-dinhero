import styled from "styled-components";

export const DivGridContainer = styled.div`
  display: grid;
  grid-template:
    " AS MH" 70px
    "AS CT" auto
    / 250px auto;

  height: 100vh;
  @media screen and (max-width: 550px){
    grid-template:
    " AS MH" 70px
    "AS CT" auto
    / 37% auto;
  }
`;
