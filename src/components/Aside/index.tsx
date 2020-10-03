import React from "react";
import * as S from "./styles";

import logoImg from "../../assets/logo.svg";

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

const menuArray = [
  { title: "Dashboard", icon: <MdDashboard /> },
  { title: "Entradas", icon: <MdArrowUpward /> },
  { title: "Saidas", icon: <MdArrowDownward /> },
  { title: " Sair", icon: <MdExitToApp /> },
];

const Aside: React.FC = () => {
  return (
    <S.AsideContainer>
      <S.DivHeaderContainer>

        <S.ImgHeaderIcon
          src={logoImg}
          alt="logo minha carteira"
        ></S.ImgHeaderIcon>

        <S.TitleHeader>Minha Carteira</S.TitleHeader>

      </S.DivHeaderContainer>

      <S.NavMenuContainer>

        {menuArray.map((e) => {
          return (
            <S.LinkMenuItem key={e.title}>
              {e.icon}
              {e.title}
            </S.LinkMenuItem>
          );
        })}
        
      </S.NavMenuContainer>
    </S.AsideContainer>
  );
};

export default Aside;
