import React, { useEffect, useState } from "react";
import { IQuestion } from "../types";
import { fetchQuestions } from "../api/fetchQuestion";

type Props = {
  category?: number;
};

export const useFetch = ({ category }: Props) => {
  const [data, setData] = useState<IQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchQuestions(category);
      setData(data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return { data, loading, error };
};
