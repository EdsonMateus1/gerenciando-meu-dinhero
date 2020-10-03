import styled from "styled-components";

export const DivHeaderContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const H2title = styled.h2`
  @media screen and (max-width: 400px){
    font-size: 1.0rem;
  }
  &::after {
    content: "";
    display: block;
    width: 55px;
    border-bottom: 10px solid ${({ theme }) => theme.colors.warning};
  }
`;

export const DivContainerSelectoDate = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
`;
