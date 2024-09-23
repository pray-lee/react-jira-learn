import React, { useContext } from "react";
import nameContext from "./nameContext";
import "./App.css";

export default function AppContext() {
  const context = useContext(nameContext);
  return (
    <div>
      <nameContext.Provider value="hahahaha">
        {/*initial lixiaoyong*/}
        <div>{context}</div>
        <Po>
          {/*Ok的provider是111*/}
          <Ok>{context}</Ok>
        </Po>
      </nameContext.Provider>
    </div>
  );
}

function Po({ children }) {
  const context = useContext(nameContext);
  return (
    <p>
      {/*  hahahaha*/}
      <p>{context}</p>
      <nameContext.Provider value={111}>{children}</nameContext.Provider>
    </p>
  );
}

function Ok() {
  const context = useContext(nameContext);
  return <div>{context} 666</div>;
}
