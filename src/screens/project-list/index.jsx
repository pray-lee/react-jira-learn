import React, { useState, useEffect } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
export const ProjectListScreen = () => {
  return (
    <div>
      <SearchPanel />
      <List />
    </div>
  );
};
