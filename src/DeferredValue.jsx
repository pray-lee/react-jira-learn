import React, { useDeferredValue, memo, useState } from "react";

export default function DeferredValue() {
  const [value, setValue] = useState("");
  const deferredValue = useDeferredValue(value);
  console.log(value.length, "current");
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <List value={deferredValue} />
    </div>
  );
}

const List = memo(function List({ value }) {
  let items = [];
  console.log(value.length);
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem text={value}></SlowItem>);
  }
  return <ul className="items">{items}</ul>;
});
function SlowItem({ text }) {
  let startTime = performance.now();
  return <li className="item">Text: {text}</li>;
}
