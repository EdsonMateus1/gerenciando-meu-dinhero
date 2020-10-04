import React, { useMemo } from "react";

import CardFinance from "../../components/CardFinance";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import * as S from "./styles";

const arrayOptionsMonth = [
  { value: 1, label: "JANEIRO" },
  { value: 2, label: "FEVEREIRO" },
];
const arrayOptionsYear = [
  { value: 2019, label: 2019 },
  { value: 2020, label: 2020 },
];

const arrayCardFinance = [
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
  { title: "conta de luz", subtitle: "20/20/2020", amount: "$ 210,00" },
];

interface IRoutesParams {
  match: {
    params: {
      type: string;
    };
  };
}

const List: React.FC<IRoutesParams> = ({ match }) => {
  const title = useMemo(() => {
    return match.params.type === "entry-balance" ? "Entradas" : "Saidas";
  }, [match.params.type]);

  return (
    <S.DivContainer>
      <ContentHeader title={title}>
        <SelectInput options={arrayOptionsMonth} />
        <SelectInput options={arrayOptionsYear} />
      </ContentHeader>

      <S.DivFilterContainer>
        <button type="button" className="tag-filter">
          Recorrentes
        </button>
        <button type="button" className="tag-filter">
          Eventuais
        </button>
      </S.DivFilterContainer>

      <S.DivCardContainer>
        {arrayCardFinance.map((data) => (
          <CardFinance
            title={data.title}
            subtitle={data.subtitle}
            amount={data.amount}
          />
        ))}
      </S.DivCardContainer>
    </S.DivContainer>
  );
};
export default List;
