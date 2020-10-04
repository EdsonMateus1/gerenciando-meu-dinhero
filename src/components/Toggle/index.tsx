import React from "react";

import * as S from "./styles";

const Toggle: React.FC = () => {
  return (
    <S.DivContainer>
      <S.SpanToggleLabel>Light</S.SpanToggleLabel>

      <S.SwitchToggleSelector
        uncheckedIcon={false}
        checkedIcon={false}
        checked
        onChange={() => {}}
      />

      <S.SpanToggleLabel>Dark</S.SpanToggleLabel>
    </S.DivContainer>
  );
};

export default Toggle;
