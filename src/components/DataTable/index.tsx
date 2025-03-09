import { useEffect } from "react";

import { Typography } from "ui/components";

import { DataTableHeader } from "./DataTableHeader";
import { DataGrid } from "./DataGrid";

import { useManageTableData } from "./hooks/useManageTableData";

import styles from "./DataTable.module.css";

export const DataTable = () => {
  const { data, loading, error, loadData } = useManageTableData();

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) {
    return (
      <Typography variant="body1" className={styles.loading}>
        Loading...
      </Typography>
    );
  }

  return (
    <div className={styles.container}>
      <DataTableHeader onUploadComplete={loadData} />
      {error && (
        <Typography variant="body2" className={styles.error}>
          {error}
        </Typography>
      )}
      <DataGrid data={data} />
    </div>
  );
};
