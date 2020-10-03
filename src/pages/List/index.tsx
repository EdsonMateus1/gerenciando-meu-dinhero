import React,{useContext} from "react";
import {ThemeContext} from "styled-components";


import CardFinance from "../../components/CardFinance";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import * as S from "./styles";




const arrayOptions = [
  { value: "teste", label: "EDSON" },
  { value: "teste", label: "MATEUS" },
];

const List: React.FC = () => {

  const theme = useContext(ThemeContext);

  return (
    <S.DivContainer>

      <ContentHeader title="List">
        <SelectInput options={arrayOptions} />
      </ContentHeader>

      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      <CardFinance  title="conta de luz" subtitle="20/20/2020" amount="$ 210,00"/>
      

    </S.DivContainer>
  );
};
export default List;