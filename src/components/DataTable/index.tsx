import React, { useEffect, useState } from "react";

import { fetchData } from "services/api";
import { DataItem } from "types";

import { DataTableHeader } from "./DataTableHeader";
import { DataGrid } from "./DataGrid";

import styles from "./DataTable.module.css";

export const DataTable: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadData = async () => {
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
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <DataTableHeader onUploadComplete={loadData} />
      {error && <div className={styles.error}>{error}</div>}
      <DataGrid data={data} />
    </div>
  );
};
