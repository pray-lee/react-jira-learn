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
    return () => {
      clearTimeout(timeout);
      // 每次执行的时候把定时器销毁，其实每次value的变化都会导致useEffect的变化,只不过是把定时器消了导致setTimout迟迟不执行,进而达到debounce效果
      console.log("unmount");
    };
  }, [value, delay]);
  return debouncedValue;
};
