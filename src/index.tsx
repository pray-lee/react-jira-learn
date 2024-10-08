import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Effect from "./Effect";
// import RefDemo from "./Ref";
// import AppContext from "./AppContext";
// import MemoDemo from "./MemoDemo";
// import SyncExternalStore from "./SyncExternalStore";
// import CallbackUse from './callbackUse'
import DeferredValue from "./DeferredValue";
import reportWebVitals from "./reportWebVitals";
import { loadDevTools } from "jira-dev-tool";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
loadDevTools(() =>
  root.render(
    // <React.StrictMode>
    //   <MemoDemo />
    // <SyncExternalStore />,
    //   <CallbackUse />,
    <DeferredValue />,
    // </React.StrictMode>,
  ),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
