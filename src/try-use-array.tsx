import React from "react";
import { useArray } from "./util";
export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    {
      name: "jack",
      age: 25,
    },
    {
      name: "jack",
      age: 25,
    },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  return (
    <div>
      <button onClick={() => add({ name: "join", age: 22 })}>add join</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>clear</button>
      {value.map((person, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          <span>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
