import React, { useEffect, useState } from "react";
import { useImmerReducer } from "use-immer";
import "./App.css";
import { useDebounce } from "./util";

function dataReducer(draft, action) {
  switch (action.type) {
    case "change":
      draft.value = action.value;
      draft.list.push(action.value);
      break;
    case "remove":
      draft.list.splice(action.idx, 1);
      break;
  }
}

let t = null;

function AppReducer() {
  const [value, setValue] = useState("");
  const [data, dispatch] = useImmerReducer(dataReducer, {
    value: "",
    list: [],
  });

  const debounceValue = useDebounce(value, 300);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch({ type: "change", value: debounceValue });
  }, [debounceValue]);

  const handleDel = (idx) => {
    dispatch({ type: "remove", idx });
  };

  return (
    <div className="App">
      <input type="text" value={value} onChange={handleChange} />
      <ul>
        {data.list.map((item, index) => (
          <li key={index} onClick={() => handleDel(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppReducer;
