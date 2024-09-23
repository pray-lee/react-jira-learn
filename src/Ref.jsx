import React, { useRef, useState, forwardRef } from "react";

// Ref用来保存react组件中不需要驱动页面变更的数据
// 取值用ref.current

function RefDemo() {
  const [time, setTime] = useState(new Date().getTime());
  const timer = useRef(null);
  const childRef = useRef(null);
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
  function showRef() {
    // div
    console.log(childRef, "childRef");
  }
  return (
    <div>
      <Child a={1} ref={childRef} />
      <button onClick={showRef}></button>
      {time}
      <button onClick={handleStartClick}>start</button>
      <button onClick={handleStopClick}>stop</button>
    </div>
  );
}

const Child = forwardRef(({ ...props }, ref) => {
  return <div ref={ref}></div>;
});

export default RefDemo;
