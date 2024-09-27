import React, { useDeferredValue, memo, useState } from "react";

export default function DeferredValue() {
  console.log("===============");
  const [value, setValue] = useState("");
  const deferredValue = useDeferredValue(value);
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <List value={deferredValue} />
    </div>
  );
}

const List = memo(function List({ value }) {
  console.log("123123123123");
  let items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem text={value}></SlowItem>);
  }
  return <ul className="items">{items}</ul>;
});
function SlowItem({ text }) {
  let startTime = performance.now();
  console.log(4444444);
  while (performance.now() - startTime < 100) {
    // 每个 item 暂停 1ms，模拟极其缓慢的代码
  }
  return <li className="item">Text: {text}</li>;
}
