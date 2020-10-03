import React from "react";
import * as S from "./styles";
import MainHeader from "../MainHeard";
import Content from "../Content";
import Aside from "../Aside";

const Layout: React.FC = ({ children }) => {
  return (
    <S.DivGridContainer>
      <MainHeader />

      <Content>{children}</Content>

      <Aside />
    </S.DivGridContainer>
  );
};

export default Layout;
