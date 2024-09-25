import React from "react";

let count = 0;
function subscribe(callback) {
  setInterval(() => {
    count++;
    callback();
  }, 1000);
}

function getSnapshot() {
  return count;
}

export default function SyncExternalStore() {
  const count = React.useSyncExternalStore(subscribe, getSnapshot);
  return (
    <div>
      {count}
      {123}
    </div>
  );
}
