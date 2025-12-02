import { useEffect, useState } from "react";
import type { FetchProps } from "../common/interface";


const useFetch = <T>({ url }: FetchProps) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState< Error | null>(null);

  useEffect(() => {
    if (!url) return;
    async function fetchData(url: string) {
      try {
        setLoading(true);
        let response = await fetch(url);

        let formattedResponse = await response.json();
        setResponse(formattedResponse);
      } catch (error: any) {
          setError(error);
      } finally {
           setLoading(false);
      }
    }

    fetchData(url);

    () => {};
  }, [url]);

  return {loading, response, error};
};

export default useFetch;
