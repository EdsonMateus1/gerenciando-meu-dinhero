const formatCurrency = (current: number): string => {
  return current.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

const formatData = (date: string): string => {
  const dataFormatted = new Date(date);

  const day =
    dataFormatted.getDate() > 9
      ? dataFormatted.getDate()
      : `0${dataFormatted.getDate()}`;

  const month =
    dataFormatted.getMonth() + 1 > 9
      ? dataFormatted.getMonth() + 1
      : `0${dataFormatted.getMonth() + 1}`;

  const year = dataFormatted.getFullYear();

  return `${day}/${month}/${year}`;
};

export { formatCurrency, formatData };
