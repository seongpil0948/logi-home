export const isEmail = (str: string) =>
  str ? /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(str) : false;

export const isPassword = (str: string) =>
  str ? /(?=.*\d)(?=.*[A-Za-z]).{6,}/.test(str) : false;

export const isOkNullPassword = (str: string) => {
  if (!str) return true;
  return isPassword(str);
};

export const checkLength = (str: string | Array<string | number>, len = 1) =>
  str ? str.length >= len : false;
export const checkLengthEqual = (
  str: string | Array<string | number>,
  len = 1
) => (str ? str.length === len : false);

export const checkInRange = (x: number, min: number, max: number) =>
  x !== null && x >= min && x <= max;

export const checkNotNull = (x: any) => x !== null && x !== undefined;

export const isObject = (x: any) => typeof x === "object" && !Array.isArray(x);

export const isDigitStr = (val: any) => /^\d+$/.test(val);

export const isPhone = (val: string) => /^[0-9\-\+]{9,15}$/.test(val);
