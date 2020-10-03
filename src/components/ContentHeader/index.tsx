import React from "react";
import * as S from "./styles";

interface IcontendeHeaderProps {
  title: string;
  lineColor?: string;
  children: React.ReactNode
}

const ContentHeader: React.FC<IcontendeHeaderProps> = ({ title,lineColor,children }) => {
  return (
    <S.DivHeaderContentContainer>

      <S.H2title>{title}</S.H2title>

      <S.DivContainerSelectoDate>
            {children}
      </S.DivContainerSelectoDate>

    </S.DivHeaderContentContainer>
  );
};

export default ContentHeader;
