import React, { useState, useEffect } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { cleanObject, useDebounce, useMount } from "../../util";
import qs from "qs";

const apiURL = process.env.REACT_APP_API_URL;
console.log(apiURL, "apoiURL");

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);
  useMount(() => {
    fetch(`${apiURL}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  const debouncedParam = useDebounce(param, 2000);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(
      `${apiURL}/projects?${qs.stringify(cleanObject(debouncedParam))}`,
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debouncedParam]);

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
