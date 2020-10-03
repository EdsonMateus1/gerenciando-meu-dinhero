import React from "react";

import * as S from "./styles";

interface ICardFinanceProps {
  title: string;
  subtitle: string;
  amount: string;
}

const CardFinance: React.FC<ICardFinanceProps> = ({
  title,
  subtitle,
  amount,
}) => {
  return (
    <S.DivContainer>
      <S.DivTag />

      <S.DivTitle>
        <span>{title}</span>
        <small>{subtitle}</small>
      </S.DivTitle>

      <h3>{amount}</h3>
    </S.DivContainer>
  );
};

export default CardFinance;
