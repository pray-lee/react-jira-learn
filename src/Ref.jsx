import React, { useRef, useState } from "react";

// Ref用来保存react组件中不许哟啊驱动页面变更的数据
// 取值用ref.current

function RefDemo() {
  const [time, setTime] = useState(new Date().getTime());
  const timer = useRef(null);
  function handleStartClick() {
    if (timer.current) {
      return;
    }
    timer.current = setInterval(() => {
      setTime(new Date().getTime());
    }, 1000);
  }
  function handleStopClick() {
    clearInterval(timer.current);
    timer.current = null;
  }
  return (
    <div>
      {time}
      <button onClick={handleStartClick}>start</button>
      <button onClick={handleStopClick}>stop</button>
    </div>
  );
}

export default RefDemo;
