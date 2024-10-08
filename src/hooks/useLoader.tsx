import { useState, useEffect } from "react";
// import axios from 'axios'
type Message = {
  status: number;
  message: string;
};
type Axios = {
  get: (arg: string) => Promise<Message>;
};
const axios: Axios = {
  get: (url) =>
    Promise.resolve({
      status: 200,
      message: "success",
    }),
};
export default (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    axios.get(url).then((result) => {
      setData(result.message);
      setLoading(false);
    });
  }, deps);
  return [data, loading];
};
