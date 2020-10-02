import React, { useState } from "react";

import * as S from "./styles";

const Toggle: React.FC = () => {
  const [state, setState] = useState<boolean>(false);
  return (
    <S.DivContainer>
      <S.SpanToggleLabel>Light</S.SpanToggleLabel>

      <S.SwitchToggleSelector
        uncheckedIcon={false}
        checkedIcon={false}
        checked={state}
        onChange={() => setState(true)}
      />
      
      <S.SpanToggleLabel>Dark</S.SpanToggleLabel>
    </S.DivContainer>
  );
};

export default Toggle;
