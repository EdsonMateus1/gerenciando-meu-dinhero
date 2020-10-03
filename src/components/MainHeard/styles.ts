import styled from "styled-components";

export const HeaderFlexContainer = styled.header`
  grid-area: MH;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
`;

export const DivProfile = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1.0rem;
`;

export const H3Wecome = styled.h3``;

export const SpanUserName = styled.span``;
