import React from "react";
import * as S from "./styles";

import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

const menuArray = [
  { title: "Dashboard", icon: <MdDashboard />, link: "/dashboard" },
  { title: "Entradas", icon: <MdArrowUpward />, link: "/list/entry-balance" },
  { title: "Saidas", icon: <MdArrowDownward />, link: "/list/exit-balance" },
  { title: " Sair", icon: <MdExitToApp />, link: "/sair" },
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
              <Link to={e.link}>{e.title}</Link>
            </S.LinkMenuItem>
          );
        })}
      </S.NavMenuContainer>
    </S.AsideContainer>
  );
};

export default Aside;
