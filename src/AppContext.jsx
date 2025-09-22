import React, { useContext } from "react";
import nameContext from "./nameContext";
import "./App.css";

export default function AppContext() {
  const context = useContext(nameContext);
  return (
    <div>
      <nameContext.Provider value="hahahaha">
        {/*initial lixiaoyong*/}
        <div>{context} + appcontext</div>
        <Po>
          {/*Ok的provider是111*/}
          <Ok></Ok>
        </Po>
      </nameContext.Provider>
    </div>
  );
}

function Po({ children }) {
  const context = useContext(nameContext);
  return (
    <div>
      {/*  hahahaha*/}
      <p>{context} + po</p>
      <nameContext.Provider value={"child-child"}>
        {children}
      </nameContext.Provider>
    </div>
  );
}

function Ok() {
  const context = useContext(nameContext);
  return <div>{context} + ok 666</div>;
}
