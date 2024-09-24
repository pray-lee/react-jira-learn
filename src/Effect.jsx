import React, { useState, useEffect, useMemo, useCallback } from "react";

// useEffect
// effect 是在页面更新渲染之后执行的, 每次页面渲染之后，都会先执行上一次的cleanup函数,然后再执行当前的effect里面的代码

export default function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("inti", count);
    fetch("http://localhost:3000/data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
    // 下一次更新执行上一次的effect清除
    return () => console.log(count, "clearTimeout");
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  return <div onClick={handleClick}>{count}</div>;
}
