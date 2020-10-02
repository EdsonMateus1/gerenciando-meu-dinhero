import React, { useMemo } from "react";
import * as S from "./styles";

import emojis from "../../utils/emojs";
import Toggle from "../Toggle";

const Content: React.FC = () => {
  const emoji = useMemo(() => {
    const indiceSorteado = Math.floor(Math.random() * emojis.length);
    return emojis[indiceSorteado];
  }, []);

  return (
    <S.HeaderFlexContainer>
      <Toggle></Toggle>
      <S.DivProfile>
        <S.H3Wecome>Olá, {emoji}</S.H3Wecome>
        <S.SpanUserName>fulano</S.SpanUserName>
      </S.DivProfile>
    </S.HeaderFlexContainer>
  );
};

export default Content;
