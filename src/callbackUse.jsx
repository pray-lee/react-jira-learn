import React, { useCallback } from "react";

function App() {
  const [value, setValue] = React.useState("");
  const handleChange = useCallback((e) => {
    // 保存函数
    setValue(e.target.value);
  }, []);
  return <input value={value || ""} onChange={handleChange} />;
}

export default App;
