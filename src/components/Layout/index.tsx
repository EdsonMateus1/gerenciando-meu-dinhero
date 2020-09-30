import React from "react";
import * as S from "./styles";
import MainHeader from "../MainHeard";
import Content from "../Content";
import Aside from "../Aside";

const Layout: React.FC = () => {
  return (
    <S.GridContainer>
      <MainHeader />
      <Content />
      <Aside />
    </S.GridContainer>
  );
};

export default Layout;
