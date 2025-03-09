import { useState, useCallback } from "react";
import { fetchData } from "services/api";
import { DataItem } from "types";

export const useManageTableData = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const result = await fetchData();
      setData(result);
      setError("");
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    loadData,
  };
};
