import React, { memo, useMemo, useEffect } from "react";
import { useState } from "react";

const Li = ({ index, item }) => {
  return (
    <li key={index}>
      {item} {Math.random()}
    </li>
  );
};

const Ul = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <Li key={index} item={item}></Li>
      ))}
    </ul>
  );
};

export default function MemoDemo() {
  const list = ["lee", "liu", "zhang", "wang"];
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // 缓存一下
  const filterList = useMemo(() => {
    return list.filter((item) => item.indexOf(searchValue) > -1);
  }, [searchValue]);

  const Uls = useMemo(() => <Ul list={filterList} />, [filterList]);

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
      {Uls}
    </div>
  );
}
