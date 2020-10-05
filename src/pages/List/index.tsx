import React, { useMemo, useEffect, useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

import CardFinance from "../../components/CardFinance";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import expensesJson from "../../repositores/expenses";
import gainsJson from "../../repositores/gains";

import * as S from "./styles";

const arrayOptionsMonth = [
  { value: 1, label: "JANEIRO" },
  { value: 2, label: "FEVEREIRO" },
];

const arrayOptionsYear = [
  { value: 2019, label: 2019 },
  { value: 2020, label: 2020 },
];

interface IRoutesParams {
  match: {
    params: {
      type: string;
    };
  };
}

interface IData {
  description: string;
  amount: string;
  type: string;
  frequency: string;
  date: string;
}

const List: React.FC<IRoutesParams> = ({ match }) => {
  const [dataState, setData] = useState<IData[]>([]);

  const [filterdataState, setFilterData] = useState<IData[]>([]);

  const [verifyFilter, setVerifi] = useState(false);

  const title = useMemo(() => {
    const title = match.params.type === "entry-balance" ? "Entradas" : "Saidas";
    return title;
  }, [match.params.type]);

  const listData = () => {
    title === "Entradas" ? setData(gainsJson) : setData(expensesJson);
  };

  useEffect(() => {
    setVerifi(false);
    listData();
  }, [match.params]);

  const filterEventuais = useCallback(() => {
    const eventual = dataState.filter((e) => {
      return e.frequency === "eventual";
    });
    setFilterData(eventual);
  }, [dataState]);

  const filterRecorrentes = useCallback(() => {
    const recorrente = dataState.filter((e) => {
      return e.frequency === "recorrente";
    });
    setFilterData(recorrente);
  }, [dataState]);

  const handleFilterEventuais = useCallback(() => {
    setVerifi(true);
    filterEventuais();
  }, [dataState]);

  const handleFilterRecorrentes = useCallback(() => {
    setVerifi(true);
    filterRecorrentes();
  }, [dataState]);

  return (
    <S.DivContainer>
      <ContentHeader title={title}>
        <SelectInput options={arrayOptionsMonth} />
        <SelectInput options={arrayOptionsYear} />
      </ContentHeader>

      <S.DivFilterContainer>
        <button
          type="button"
          className="tag-filter"
          onClick={handleFilterEventuais}
        >
          Eventuais
        </button>

        <button
          type="button"
          className="tag-filter"
          onClick={handleFilterRecorrentes}
        >
          Recorrentes
        </button>
      </S.DivFilterContainer>

      <S.DivCardContainer>
        {verifyFilter
          ? filterdataState.map((data) => (
              <CardFinance
                key={uuid()}
                title={data.description}
                subtitle={data.date}
                amount={data.amount}
                colorVerify={data.frequency}
              />
            ))
          : dataState.map((data) => (
              <CardFinance
                key={uuid()}
                title={data.description}
                subtitle={data.date}
                amount={data.amount}
                colorVerify={data.frequency}
              />
            ))}
      </S.DivCardContainer>
    </S.DivContainer>
  );
};
export default List;
