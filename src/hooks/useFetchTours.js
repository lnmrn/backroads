import { useEffect, useState } from "react";

export function useFetchTours(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchTours() {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
        setError(error);
      }
      setIsLoading(false);
    }
    fetchTours();
  }, [url]);

  return { isLoading, error, data };
}
