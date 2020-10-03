import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import * as S from "./styles";

const arrayOptions = [
  { value: "teste", label: "EDSON" },
  { value: "teste", label: "MATEUS" },
];

const Dashboard: React.FC = () => {
  return (
    <S.DivContainer>
      <ContentHeader title="Dashboard">
        <SelectInput options={arrayOptions} />
      </ContentHeader>
    </S.DivContainer>
  );
};
export default Dashboard;
