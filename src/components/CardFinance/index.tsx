import React from "react";

import * as S from "./styles";

interface ICardFinanceProps {
  title: string;
  subtitle: string;
  amount: string;
  colorVerify: string;
}

const CardFinance: React.FC<ICardFinanceProps> = ({
  title,
  subtitle,
  amount,
  colorVerify,
}) => {
  return (
    <S.DivContainer>
      <S.DivTag colorVerify={colorVerify} />

      <S.DivTitle>
        <span>{title}</span>
        <small>{subtitle}</small>
      </S.DivTitle>

      <h3>{amount}</h3>
    </S.DivContainer>
  );
};

export default CardFinance;
