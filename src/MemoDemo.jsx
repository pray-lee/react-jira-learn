import React, { useState, memo, useMemo, useEffect } from "react";

const Li = ({ index, item }) => {
  return (
    <li key={index}>
      {item} {Math.random()}
    </li>
  );
};

// ================useMemo 组件这么用================================
// const Ul = ({ list }) => {
//   return (
//     <ul>
//       {list.map((item, index) => (
//         <Li key={index} item={item}></Li>
//       ))}
//     </ul>
//   );
// };
// const Uls = useMemo(() => <Ul list={filterList} />, [filterList]);
// {Uls}
// ================================================

// ===================memo包组件这么用===========================
const Ul = memo(({ list }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <Li key={index} item={item}></Li>
      ))}
    </ul>
  );
});
// <Ul list={filterList}/>
// ========================================================

export default function MemoDemo() {
  const list = ["lee", "liu", "zhang", "wang"];
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // 缓存数据用的
  const filterList = useMemo(() => {
    return list.filter((item) => item.indexOf(searchValue) > -1);
  }, [searchValue]);

  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleSearchValue(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputValue} />
      <input type="text" value={searchValue} onChange={handleSearchValue} />
      {/*<ul>*/}
      {/*    {*/}
      {/*        filterList.map((item, index) => (<Li key={index} item={item}></Li>))*/}
      {/*    }*/}
      {/*</ul>*/}
      {/*{Uls}*/}
      <Ul list={filterList} />
    </div>
  );
}

function TestUseHookMemo({ someProp }) {
  // const obj = {a:1}
  // 先缓存obj
  const obj = useMemo(() => {
    return { a: 1, someProp: someProp };
  }, [someProp]);
  // 在使用obj的缓存去缓存另外一个
  const memoObj = useMemo(() => {
    return { b: 2 };
  }, obj);
  return <div></div>;
}

export const Time = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);
  return <div>{count}</div>;
};
