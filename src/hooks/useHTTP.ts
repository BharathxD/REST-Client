import { IRegister } from "../types/Register.types";
import { useState } from "react";

type IData = IRegister | Omit<IRegister, "name" & "confirmPassword">;

interface IuseHTTP {
  url: string;
  method?: string;
  body?: IData;
  headers?: {};
}

const useHTTP = ({ url, method = "GET", body, headers }: IuseHTTP) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);
  const [data, setData] = useState<IData | null>();
  const useFetch = async () => {
    try {
      setLoading(true);
      setError(null);
      setData(null);
      const response: Response = await fetch(url, {
        method,
        body: body ? JSON.stringify(body) : null,
        headers: headers || {},
      });
      console.log("RESPONSE: ",response);
      if (!response.ok) throw new Error("Something went wrong");
      let data = await response.json();
      switch (method) {
        case "GET": {
          setData(data);
          break;
        }
        case "POST": {
          setData(data);
          break;
        }
      }
    } catch (error: any) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    isLoading: loading,
    hasError: error,
    responseData: data,
    fetchHandler: useFetch,
  };
};

export default useHTTP;
