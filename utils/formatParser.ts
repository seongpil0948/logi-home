export const formatCurrency = (value: number | null) => {
  if (value === null) return null;
  return value.toLocaleString();
};
export const parseCurrencyStr = (input: string | null) => {
  const num = input?.replace(/,/g, "").trim() ?? "";
  if (/^\d+(\.(\d+)?)?$/.test(num)) return Number(num);
  return num === "" ? null : Number.NaN;
};
