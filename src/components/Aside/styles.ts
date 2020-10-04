import styled from "styled-components";

export const AsideContainer = styled.aside`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  padding-left: 10px;
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
  font-size: 1rem;
  margin: 0px 5px;
`;

export const NavMenuContainer = styled.nav`
  position: absolute;
  top: 100px;

  display: flex;
  flex-direction: column;
`;

export const LinkMenuItem = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.info};
  > a {
    margin: 7px 0px;
    text-decoration: none;
    transition: opacity 0.3s;
    font-size: 1rem;
    font-weight: 500;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }

  > svg {
    font-size: 18px;
    margin: 0px 5px;
  }
`;
