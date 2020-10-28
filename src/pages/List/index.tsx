import React, { useMemo, useEffect, useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

import CardFinance from "../../components/CardFinance";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import expensesJson from "../../repositores/expenses";
import gainsJson from "../../repositores/gains";
import { formatCurrency, formatData } from "../../utils/formaterFunctions";

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

  const [verifyFilter, setVerifyFilter] = useState(false);

  const title = useMemo(() => {
    const title = match.params.type === "entry-balance" ? "Entradas" : "Saidas";
    return title;
  }, [match.params.type]);

  const listData = () => {
    title === "Entradas" ? setData(gainsJson) : setData(expensesJson);
  };

  useEffect(() => {
    setVerifyFilter(false);
    listData();
  }, [match.params]);

  const year = useMemo(() => {
    let uniqueYear: number[] = [];

    dataState.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYear.includes(year)) {
        uniqueYear.push(year);
      }
    });

    return uniqueYear.map((year) => {
      return {
        value: year,
        label: year,
      }
    });
  }, [dataState]);
  console.log(year);

  const handleFilter = useCallback(
    (filter: string) => {
      const eventual = dataState.filter((e) => {
        return e.frequency === filter;
      });
      setVerifyFilter(true);
      setFilterData(eventual);
    },
    [dataState]
  );
  
  return (
    <S.DivContainer>
      <ContentHeader title={title}>
        <SelectInput options={year} />
        <SelectInput options={year} />
      </ContentHeader>

      <S.DivFilterContainer>
        <button
          type="button"
          className="tag-filter-eventuais"
          onClick={() => handleFilter("eventual")}
        >
          Eventuais
        </button>

        <button
          type="button"
          className="tag-filter"
          onClick={() => handleFilter("recorrente")}
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
                date={formatData(data.date)}
                amount={formatCurrency(Number(data.amount))}
                colorVerify={data.frequency}
              />
            ))
          : dataState.map((data) => (
              <CardFinance
                key={uuid()}
                title={data.description}
                date={formatData(data.date)}
                amount={formatCurrency(Number(data.amount))}
                colorVerify={data.frequency}
              />
            ))}
      </S.DivCardContainer>
    </S.DivContainer>
  );
};
export default List;
