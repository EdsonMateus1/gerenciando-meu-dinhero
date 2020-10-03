import React, { useState } from "react";

import * as S from "./styles";

const Toggle: React.FC = () => {
  const [stateCheck, setState] = useState<boolean>(false);
  return (
    <S.DivContainer>
      <S.SpanToggleLabel>Light</S.SpanToggleLabel>

      <S.SwitchToggleSelector
        uncheckedIcon={false}
        checkedIcon={false}
        checked={stateCheck}
        onChange={() => setState(!stateCheck)}
      />

      <S.SpanToggleLabel>Dark</S.SpanToggleLabel>
    </S.DivContainer>
  );
};

export default Toggle;
