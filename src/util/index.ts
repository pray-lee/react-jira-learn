import { useEffect, useState } from "react";

interface obj {
  [key: string]: unknown;
}

const isFalsy = (value: unknown): boolean => (value === 0 ? false : !value);
export const cleanObject = (object: obj) => {
  const result = { ...object };
  Object.keys(result as object).forEach((key) => {
    const value = object[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// const debounce = (func, delay) => {
//   let timeout
//   return (...params) => {
//     if(timeout) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(function() {
//       func()
//     }, delay || 300)
//   }
// }

export const useDebounce = <V>(value: V, delay: number): V => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

export const useArray = <A>(initialArray: A[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    add: (item: A) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (idx: number) => {
      const copy = [...value];
      copy.splice(idx, 1);
      setValue([...copy]);
    },
  };
};
