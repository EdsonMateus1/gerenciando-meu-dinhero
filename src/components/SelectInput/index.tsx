import React from "react";

import * as S from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
  return (
    <S.SelectContainer>
      {options.map((option,i) => (
        <option key={i} value={option.value}>{option.label}</option>
      ))}
    </S.SelectContainer>
  );
};

export default SelectInput;
