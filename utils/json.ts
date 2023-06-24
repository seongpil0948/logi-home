import { Timestamp } from "firebase/firestore";

export function commonToJson(c: any) {
  const dateKeys: string[] = [];
  Object.entries(c).forEach(([k, v]) => {
    if (Object.prototype.toString.call(v) === "[object Date]") {
      dateKeys.push(k);
    }
  });
  const j = JSON.parse(JSON.stringify(c));
  dateKeys.forEach((dk) => {
    j[dk] = dateToTimeStamp(c[dk]);
  });
  return j;
}

export function commonFromJson(data: { [k: string]: any }) {
  console.info("commonFromJson: ", data);
  Object.keys(data).forEach((k) => {
    if (data[k] instanceof Timestamp) {
      data[k] = loadDate(data[k]);
    }
  });
  return data;
}
