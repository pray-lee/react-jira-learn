import React, { useEffect, useState } from "react";
import { useImmer, useImmerReducer } from "use-immer";
import "./App.css";

function dataReducer(draft, action) {
  switch (action.type) {
    case "change":
      console.log("change");
      draft.value = action.value.value;
      draft.list.push(action.value.value);
      break;
    case "remove":
      draft.list.splice(action.idx, 1);
      break;
  }
  return draft;
}

function App() {
  const [data, dispatch] = useImmerReducer(dataReducer, {}, () => {
    return {
      value: "",
      list: [],
    };
  });

  const handleChange = (e) => {
    dispatch({ type: "change", value: e.target.value });
  };
  const handleDel = (idx) => {
    dispatch({ type: "remove", idx });
  };

  return (
    <div className="App">
      <input type="text" value={data.value} onChange={handleChange} />
      <ul>
        {data.list.map((item, index) => (
          <li onClick={() => handleDel(index)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
