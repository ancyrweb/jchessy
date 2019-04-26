import { curry } from "ramda";

export const flatten = (arr: any[]) => {
  let out: any[] = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      out = [...out, ...item];
    } else {
      out.push(item);
    }
  }

  return out;
};

export const twoDimensional = curry<(...args: any[]) => any>(
  (by: number, arr: any[]): any[] => {
    let out = [];
    let cur = [];
    let i = 0;
    for (let item of arr) {
      cur.push(item);
      i++;
      if (i == by) {
        out.push(cur);
        cur = [];
        i = 0;
      }
    }

    return out;
  }
);

export const isDefined = (val: any) => val !== undefined;
export const throwIf = (predicate: (val: any) => boolean, message: string) => (
  val: any
) => {
  if (predicate(val)) {
    throw new Error(message);
  }

  return val;
};
