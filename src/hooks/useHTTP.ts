import { IRegister } from "../types/Register.types";
import { useState } from "react";

type IData = IRegister | Omit<IRegister, "name" | "confirmPassword">;

interface IuseHTTP {
  url: string;
  method?: string;
  body?: IData;
  headers?: {};
}

const useHTTP = ({ url, method = "GET", body, headers }: IuseHTTP) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);
  const [data, setData] = useState<IData>();
  const useFetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url, {
        method: method,
        body: body ? JSON.stringify(body) : "",
        headers: headers || {},
      });
      let data = await response.json();
      switch (method) {
        case "GET": {
          setData(data);
        }
        case "POST": {
          setData(data);
        }
      }
    } catch (error: any) {
      setError(error.message);
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
