import styled from "styled-components";

export const DivContainer = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  padding-left: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const DivHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const ImgHeaderIcon = styled.img`
  height: 40px;
  width: 40px;
`;

export const TitleHeader = styled.h3`
  margin: 0px 5px;
`;

export const DivMenuContainer = styled.div`
  position: absolute;
  top: 100px;

  display: flex;
  flex-direction: column;
`;

export const LinkMenuItem = styled.a`
  color: ${(props) => props.theme.colors.info};
  margin: 7px 0px;
  text-decoration: nome;
  transition: opacity 0.3;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  > svg {
    font-size: 18px;
    margin: 0px 5px;
  }
`;
